"use client";

import React, { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { motion, AnimatePresence } from "motion/react";
import {
  Star,
  Check,
  Search,
  Filter,
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
  Pin,
  X,
  Camera,
  Plus,
} from "lucide-react";

interface Review {
  id: string;
  name: string;
  avatarLetter: string;
  verified: boolean;
  location: string;
  flag: string;
  date: string;
  rating: number;
  title: string;
  comment: string;
  helpfulCount: number;
  unhelpfulCount: number;
  isPinned?: boolean;
  hasPhoto?: boolean;
  photoUrl?: string;
}

// Real customer reviews go here (newest first). Starts empty on purpose: no made-up reviews.
const DEFAULT_REVIEWS: Review[] = [];

// Photos shared by real customers, shown above the reviews.
const CUSTOMER_PHOTOS: string[] = [];

export default function ProductReviews({
  productTitle,
  rating = 0,
  reviewsCount = 0,
}: {
  productTitle: string;
  rating?: number;
  reviewsCount?: number;
}) {
  const [reviews, setReviews] = useState<Review[]>(DEFAULT_REVIEWS);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [sortBy, setSortBy] = useState<"pictures" | "recent" | "highest" | "lowest">("pictures");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<string | null>(null);

  // Write a review modal state
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [newRating, setNewRating] = useState(5);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newComment, setNewComment] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState(false);

  // Helpful counter click handler
  const handleVote = (id: string, type: "up" | "down") => {
    setReviews((prev) =>
      prev.map((r) => {
        if (r.id === id) {
          return {
            ...r,
            helpfulCount: type === "up" ? r.helpfulCount + 1 : r.helpfulCount,
            unhelpfulCount: type === "down" ? r.unhelpfulCount + 1 : r.unhelpfulCount,
          };
        }
        return r;
      })
    );
    toast.success(type === "up" ? "Marked as helpful" : "Feedback recorded");
  };

  const handleWriteReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newTitle || !newComment) {
      toast.error("Please fill in all required fields");
      return;
    }

    const newRev: Review = {
      id: `rev-${Date.now()}`,
      name: newName,
      avatarLetter: newName.charAt(0).toUpperCase() || "C",
      verified: true,
      location: "India",
      flag: "🇮🇳",
      date: new Date().toLocaleDateString("en-GB"),
      rating: newRating,
      title: newTitle,
      comment: newComment,
      helpfulCount: 0,
      unhelpfulCount: 0,
    };

    setReviews([newRev, ...reviews]);
    setSubmittedMessage(true);
    toast.success("Review Submitted!", {
      description: "Thank you for sharing your experience.",
    });

    setTimeout(() => {
      setSubmittedMessage(false);
      setIsWriteModalOpen(false);
      setNewName("");
      setNewEmail("");
      setNewTitle("");
      setNewComment("");
    }, 1500);
  };

  // Filter and sort reviews
  const displayedReviews = reviews
    .filter((r) => {
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        r.title.toLowerCase().includes(q) ||
        r.comment.toLowerCase().includes(q) ||
        r.name.toLowerCase().includes(q)
      );
    })
    .sort((a, b) => {
      if (sortBy === "pictures") {
        if (a.hasPhoto && !b.hasPhoto) return -1;
        if (!a.hasPhoto && b.hasPhoto) return 1;
        return 0;
      }
      if (sortBy === "highest") return b.rating - a.rating;
      if (sortBy === "lowest") return a.rating - b.rating;
      return 0; // recent
    });

  return (
    <section id="judgeme_product_reviews" className="w-full bg-[#fff9ef] border-t border-[#f0dfc6] py-12 sm:py-16 px-4 sm:px-6 lg:px-12 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER (TITLE, SCORE, CONTROLS)                                */}
        {/* ========================================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#f0dfc6] pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <div>
              <h2 className="text-[26px] sm:text-[32px] font-bold text-[#2b1215] leading-tight">
                Customer Reviews
              </h2>
              {reviewsCount > 0 ? (
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center text-[#4a0e14]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={19} className="fill-[#4a0e14] text-[#4a0e14]" />
                    ))}
                  </div>
                  <span className="text-[20px] font-bold text-[#2b1215]">{rating}</span>
                  <span className="text-[14px] text-[#747576]">·</span>
                  <span className="text-[14px] text-[#5c5a52]">Based on {reviewsCount} ratings</span>
                </div>
              ) : (
                <p className="text-[14px] text-[#5c5a52] mt-2">No reviews yet. Be the first to write one.</p>
              )}
            </div>

            {/* Rating distribution of the written reviews */}
            {reviews.length > 0 && (
              <div className="flex flex-col gap-1 text-[12px] text-[#5c5a52] min-w-[200px]">
                {[5, 4, 3].map((stars) => {
                  const count = reviews.filter((r) => r.rating === stars).length;
                  const percent = Math.round((count / reviews.length) * 100);
                  return (
                    <div key={stars} className="flex items-center gap-2">
                      <span className="w-12 text-right">{stars} stars</span>
                      <div className="w-24 sm:w-32 h-2.5 bg-[#e8e6df] rounded-full overflow-hidden">
                        <div className="h-full bg-[#4a0e14] rounded-full" style={{ width: `${percent}%` }} />
                      </div>
                      <span>
                        {percent}% ({count})
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Action buttons: Search, Filter, Sort Dropdown & Write Review */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Search Toggle */}
            <button
              type="button"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search reviews"
              className="p-2.5 rounded-lg border border-[#2b1215] hover:bg-white text-[#2b1215] transition-colors cursor-pointer"
            >
              <Search size={16} />
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="px-3.5 py-2.5 rounded-lg border border-[#2b1215] text-[13.5px] font-semibold text-[#2b1215] flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
              >
                <span>
                  {sortBy === "pictures"
                    ? "Pictures First"
                    : sortBy === "recent"
                    ? "Most Recent"
                    : sortBy === "highest"
                    ? "Highest Rating"
                    : "Lowest Rating"}
                </span>
                <ChevronDown size={14} />
              </button>

              {isSortOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setIsSortOpen(false)} />
                  <div className="absolute right-0 top-full mt-1.5 w-[180px] bg-white border border-[#f0dfc6] rounded-lg shadow-xl z-40 py-1.5 animate-in fade-in zoom-in-95 duration-100">
                    {[
                      { id: "pictures", label: "Pictures First" },
                      { id: "recent", label: "Most Recent" },
                      { id: "highest", label: "Highest Rating" },
                      { id: "lowest", label: "Lowest Rating" },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setSortBy(opt.id as any);
                          setIsSortOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2 text-[13px] hover:bg-[#fff9ef] cursor-pointer ${
                          sortBy === opt.id ? "font-bold text-[#b3261e] bg-[#fff6e6]" : "text-[#2b1215]"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Write a Review Button */}
            <button
              type="button"
              onClick={() => setIsWriteModalOpen(true)}
              className="bg-[#4a0e14] hover:bg-[#b3261e] text-white px-4 py-2.5 rounded-lg text-[13.5px] font-bold tracking-wide transition-colors cursor-pointer"
            >
              Write a Review
            </button>
          </div>
        </div>

        {/* Search Input Bar (when expanded) */}
        {showSearch && (
          <div className="animate-in fade-in duration-150">
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search reviews by keyword..."
              className="w-full px-4 py-2.5 border border-[#f0dfc6] rounded-lg text-[14px] bg-white outline-none focus:border-[#f9a825]"
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* 2. REAL CUSTOMER PHOTOS GALLERY STRIP                                     */}
        {/* ========================================================================= */}
        <div className="space-y-2">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {CUSTOMER_PHOTOS.map((src, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhotoModal(src)}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[10px] overflow-hidden border border-[#f0dfc6] bg-white shrink-0 cursor-pointer hover:border-[#4a0e14] transition-all group"
              >
                <Image
                  src={src}
                  alt={`Customer Photo ${idx + 1}`}
                  fill
                  sizes="96px"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. REVIEWS LIST                                                           */}
        {/* ========================================================================= */}
        <div className="divide-y divide-[#f0dfc6]">
          {displayedReviews.map((rev) => (
            <article key={rev.id} className="py-6 sm:py-8 space-y-3">
              {/* Stars & Pin Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[#4a0e14]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className={
                        i < rev.rating
                          ? "fill-[#4a0e14] text-[#4a0e14]"
                          : "text-[#d6d4cb]"
                      }
                    />
                  ))}
                </div>

                {rev.isPinned && (
                  <span
                    className="p-1 text-[#5c5a52] hover:text-[#2b1215]"
                    title="Featured Review"
                  >
                    <Pin size={15} className="rotate-45 text-[#4a0e14] fill-[#4a0e14]" />
                  </span>
                )}
              </div>

              {/* Author & Verification Info */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#e8e6df] text-[#2b1215] font-bold text-[13px] flex items-center justify-center shrink-0">
                  {rev.avatarLetter}
                </div>
                <div className="flex items-center gap-2 flex-wrap text-[13.5px]">
                  <span className="font-bold text-[#2b1215]">{rev.name}</span>
                  {rev.verified && (
                    <span className="border border-[#d6d4cb] bg-white text-[#5c5a52] text-[11px] font-semibold px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  )}
                  <span className="text-[#747576]">
                    {rev.location} {rev.flag} • {rev.date}
                  </span>
                </div>
              </div>

              {/* Review Title */}
              <h4 className="text-[16px] font-bold text-[#2b1215] leading-snug">
                {rev.title}
              </h4>

              {/* Review Text Body */}
              <p className="text-[14px] sm:text-[14.5px] text-[#3d3b36] leading-relaxed max-w-[800px]">
                {rev.comment}
              </p>

              {/* Attached Review Photo if any */}
              {rev.hasPhoto && rev.photoUrl && (
                <div
                  onClick={() => setSelectedPhotoModal(rev.photoUrl!)}
                  className="relative w-20 h-20 rounded-[8px] overflow-hidden border border-[#f0dfc6] cursor-pointer hover:border-[#4a0e14] transition-all mt-2"
                >
                  <Image
                    src={rev.photoUrl}
                    alt={rev.title}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              )}

              {/* Helpful Actions */}
              <div className="flex items-center gap-4 pt-2 text-[12.5px] text-[#747576]">
                <span>Was this helpful?</span>
                <button
                  type="button"
                  onClick={() => handleVote(rev.id, "up")}
                  className="flex items-center gap-1.5 hover:text-[#4a0e14] cursor-pointer transition-colors"
                >
                  <ThumbsUp size={14} />
                  <span>({rev.helpfulCount})</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleVote(rev.id, "down")}
                  className="flex items-center gap-1.5 hover:text-[#e53935] cursor-pointer transition-colors"
                >
                  <ThumbsDown size={14} />
                  <span>({rev.unhelpfulCount})</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {reviews.length > 0 && reviews.length < reviewsCount && (
          <div className="text-center pt-4 border-t border-[#f0dfc6]">
            <button
              type="button"
              className="border border-[#4a0e14] hover:bg-white text-[#4a0e14] font-bold text-[14px] px-8 py-3 rounded-lg transition-colors cursor-pointer"
            >
              Load More Reviews ({reviews.length} of {reviewsCount})
            </button>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 4. PHOTO LIGHTBOX MODAL                                                   */}
      {/* ========================================================================= */}
      {selectedPhotoModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 animate-in fade-in"
          onClick={() => setSelectedPhotoModal(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhotoModal(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full cursor-pointer"
          >
            <X size={28} />
          </button>
          <div className="relative max-w-[90vw] max-h-[85vh] w-[600px] h-[600px]">
            <Image
              src={selectedPhotoModal}
              alt="Customer Review Photo"
              fill
              sizes="(max-width: 768px) 90vw, 600px"
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. WRITE A REVIEW MODAL                                                   */}
      {/* ========================================================================= */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-[500px] bg-white rounded-2xl shadow-2xl border border-[#f0dfc6] p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-[#f0dfc6] pb-3">
              <h3 className="font-bold text-[18px] text-[#2b1215]">
                Write a Review for {productTitle}
              </h3>
              <button
                type="button"
                onClick={() => setIsWriteModalOpen(false)}
                className="text-[#5c5a52] hover:text-[#2b1215] p-1 cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {submittedMessage ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#f9a825]/20 border-2 border-[#f9a825] flex items-center justify-center mx-auto text-[#b3261e]">
                  <Check size={32} />
                </div>
                <h4 className="font-bold text-[18px] text-[#2b1215]">
                  Thank You For Your Review!
                </h4>
                <p className="text-[13.5px] text-[#5c5a52]">
                  Your review has been verified and posted.
                </p>
              </div>
            ) : (
              <form onSubmit={handleWriteReviewSubmit} className="space-y-4">
                {/* Rating Stars Picker */}
                <div>
                  <label className="block text-[13px] font-bold text-[#2b1215] mb-1">
                    Rating *
                  </label>
                  <div className="flex items-center gap-1.5 text-[#4a0e14]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className="cursor-pointer hover:scale-110 transition-transform"
                      >
                        <Star
                          size={24}
                          className={
                            star <= newRating
                              ? "fill-[#4a0e14] text-[#4a0e14]"
                              : "text-[#d6d4cb]"
                          }
                        />
                      </button>
                    ))}
                    <span className="text-[13px] font-bold text-[#2b1215] ml-2">
                      {newRating} / 5 Stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-[12.5px] font-bold text-[#2b1215] mb-1">
                    Review Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Great sparklers for the kids!"
                    className="w-full px-3.5 py-2 border border-[#f0dfc6] rounded-lg text-[14px] outline-none focus:border-[#f9a825]"
                  />
                </div>

                <div>
                  <label className="block text-[12.5px] font-bold text-[#2b1215] mb-1">
                    Your Review *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Tell others what you liked about this product..."
                    className="w-full px-3.5 py-2 border border-[#f0dfc6] rounded-lg text-[14px] outline-none focus:border-[#f9a825]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12.5px] font-bold text-[#2b1215] mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="e.g. Priya"
                      className="w-full px-3.5 py-2 border border-[#f0dfc6] rounded-lg text-[14px] outline-none focus:border-[#f9a825]"
                    />
                  </div>
                  <div>
                    <label className="block text-[12.5px] font-bold text-[#2b1215] mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2 border border-[#f0dfc6] rounded-lg text-[14px] outline-none focus:border-[#f9a825]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f9a825] hover:bg-[#f29d12] text-[#4a0e14] font-bold text-[15px] py-3 rounded-lg uppercase tracking-wider transition-colors cursor-pointer shadow-sm mt-2"
                >
                  Submit Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

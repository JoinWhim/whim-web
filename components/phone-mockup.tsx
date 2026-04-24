"use client"

import { MapPin, Clock, Users, Heart, X, Sparkles } from "lucide-react"

export function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow effect behind phone */}
      <div 
        className="absolute inset-0 blur-[60px] opacity-40"
        style={{
          background: "linear-gradient(135deg, #7C3AED 0%, #8B6FF0 100%)"
        }}
      />
      
      {/* iPhone 16 Pro Frame */}
      <div 
        className="relative w-[320px] lg:w-[360px] aspect-[9/19] bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] rounded-[50px] p-3 shadow-2xl"
        style={{
          boxShadow: "0 50px 100px -20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
        }}
      >
        {/* Screen */}
        <div className="relative w-full h-full bg-[#0A0E1E] rounded-[42px] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] h-[32px] bg-black rounded-full z-20" />
          
          {/* Status Bar */}
          <div className="absolute top-3 left-8 right-8 flex justify-between items-center text-white text-xs z-10">
            <span className="font-medium">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2.5 border border-white/60 rounded-sm relative">
                <div className="absolute inset-0.5 bg-white/60 rounded-sm" style={{ width: "80%" }} />
              </div>
            </div>
          </div>

          {/* App Content - Event Card */}
          <div className="absolute inset-0 pt-16 px-4 pb-6 flex flex-col">
            {/* App Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-[#7C3AED] to-[#8B6FF0] rounded-md flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-white font-bold text-sm">Whim</span>
              </div>
              <span className="text-white/40 text-xs">Tonight</span>
            </div>

            {/* Event Card */}
            <div 
              className="flex-1 bg-gradient-to-b from-[#1a1f35] to-[#0f1322] rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.08)]"
              style={{
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
            >
              {/* Event Image Placeholder */}
              <div className="h-40 lg:h-48 bg-gradient-to-br from-[#7C3AED]/30 to-[#8B6FF0]/20 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#8B6FF0] opacity-50 blur-xl" />
                  <span className="absolute text-4xl">🎉</span>
                </div>
                {/* Live badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#22c55e] rounded-full flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                  </span>
                  <span className="text-[10px] font-semibold text-white">LIVE</span>
                </div>
              </div>

              {/* Event Details */}
              <div className="p-4">
                <h3 className="text-white font-bold text-base mb-1">Rooftop Sunset Party</h3>
                <p className="text-white/50 text-xs mb-3">Hosted by @socialclub</p>
                
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#8B6FF0]" />
                    <span>Downtown Rooftop · 0.8mi</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <Clock className="w-3.5 h-3.5 text-[#8B6FF0]" />
                    <span>Starts in 2 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-xs">
                    <Users className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span className="text-[#22c55e]">24 friends going</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center gap-6 mt-4">
              <button className="w-14 h-14 rounded-full bg-[rgba(239,68,68,0.15)] border border-[rgba(239,68,68,0.3)] flex items-center justify-center hover:bg-[rgba(239,68,68,0.25)] transition-colors">
                <X className="w-6 h-6 text-[#ef4444]" />
              </button>
              <button 
                className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#8B6FF0] flex items-center justify-center shadow-lg"
                style={{
                  boxShadow: "0 0 30px rgba(124, 58, 237, 0.5)"
                }}
              >
                <Heart className="w-7 h-7 text-white fill-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for depth */}
      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-transparent blur-xl" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-[#8B6FF0]/20 to-transparent blur-xl" />
    </div>
  )
}

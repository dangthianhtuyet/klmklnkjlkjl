/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MoreHorizontal,
  Circle,
  Package,
  Send,
  ScanLine,
  MapPin,
  Users,
  Truck,
  Grid,
  Archive,
  Headset,
  X,
  Search,
  Ticket,
  User,
  Volume2
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [showNotification, setShowNotification] = useState(true);

  const tabs = ['个人件', '集运件', '整柜直达'];

  return (
    <div className="min-h-screen bg-[#F5F6F8] font-sans pb-24 max-w-md mx-auto relative shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#2B66FF] to-[#4B80FF] pt-12 pb-20 px-4 relative">
        <div className="flex justify-between items-center text-white">
          <div className="w-20"></div>
          <h1 className="text-lg font-medium">极光转运</h1>
          <div className="flex items-center bg-black/15 rounded-full px-3 py-1.5 space-x-2 border border-white/20 backdrop-blur-sm">
            <MoreHorizontal size={16} />
            <div className="w-px h-3 bg-white/30"></div>
            <Circle size={14} className="fill-current" />
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="-mt-16 px-4 relative z-10">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden h-32 relative">
          {activeTab === 0 && (
            <div className="w-full h-full bg-gradient-to-r from-[#E8F0FF] to-[#F0F5FF] relative overflow-hidden flex items-center px-6">
              <div className="z-10">
                <h2 className="text-2xl font-black text-[#2B66FF] italic tracking-wider mb-2" style={{ textShadow: '1px 1px 0 #fff' }}>签多多攒积分</h2>
                <div className="bg-[#2B66FF] text-white text-[10px] px-2 py-0.5 rounded-full inline-block mb-3">
                  · 福利优惠 领不断 ·
                </div>
                <br />
                <button className="bg-gradient-to-r from-[#FFE259] to-[#FFA751] text-[#A65E00] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  立即参与
                </button>
              </div>
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-50 translate-x-10 translate-y-10"></div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="w-full h-full bg-gradient-to-r from-[#6EE7B7] to-[#3B82F6] relative overflow-hidden flex items-center px-6">
              <div className="z-10">
                <h2 className="text-2xl font-black text-white italic tracking-wider leading-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>三五成群寄</h2>
                <h2 className="text-2xl font-black text-white italic tracking-wider leading-tight mb-3" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>享优惠翻1倍</h2>
                <button className="bg-gradient-to-r from-[#FF8C00] to-[#FF6B00] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
                  · 立即寄件 ·
                </button>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="w-full h-full bg-gradient-to-r from-[#4B80FF] to-[#2B66FF] relative overflow-hidden flex items-center px-6">
              <div className="z-10">
                <h2 className="text-3xl font-black text-white tracking-wider leading-tight" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>大票直达</h2>
                <h2 className="text-3xl font-black text-white tracking-wider leading-tight mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>优选极光</h2>
                <div className="text-white/90 text-xs flex items-center">
                  <span className="w-1 h-1 bg-white rounded-full mr-1"></span>
                  专业有保障下单
                  <span className="w-1 h-1 bg-white rounded-full ml-1"></span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Warehouse Info */}
      <div className="mx-4 mt-3 bg-[#EEF3FF] rounded-xl p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-[#FFE8D6] p-1.5 rounded-lg">
            <Package className="text-[#D97706]" size={18} />
          </div>
          <span className="text-[#1E3A8A] text-sm font-medium">仓库列表，地址一键复制</span>
        </div>
        <button className="bg-[#2B66FF] text-white text-xs px-4 py-1.5 rounded-full font-medium">
          去复制
        </button>
      </div>

      {/* Tabs */}
      <div className="flex px-4 mt-5 space-x-6 border-b border-gray-200/60 pb-2">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`relative pb-2 text-[15px] cursor-pointer transition-colors ${activeTab === idx ? 'text-gray-900 font-bold' : 'text-gray-500'}`}
          >
            {tab}
            {activeTab === idx && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#2B66FF] rounded-full"></div>
            )}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4">
        {activeTab === 0 && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="text-[#2B66FF] mr-3">
                  <Send size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-gray-800 text-[15px]">寄快递</span>
                    <span className="bg-[#FF4D4F] text-white text-[9px] px-1 py-0.5 rounded-sm leading-none">新手下单</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">操作指引 了解步骤</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="text-[#2B66FF] mr-3">
                  <ScanLine size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-[15px]">扫码取</div>
                  <div className="text-[11px] text-gray-400 mt-1">二维码自助取件</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="text-[#2B66FF] mr-3">
                  <MapPin size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="font-bold text-gray-800 text-[15px]">网点自寄</span>
                    <span className="bg-[#FF4D4F] text-white text-[9px] px-1 py-0.5 rounded-sm leading-none">敬请期待</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">去极光网点寄件</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="bg-white rounded-xl p-4 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="text-[#2B66FF] mr-3">
              <Users size={26} strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-bold text-gray-800 text-[15px]">集运广场</div>
              <div className="text-[11px] text-gray-400 mt-1">共享优惠 优选极光</div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <div className="text-[#2B66FF] mr-3">
                <Truck size={26} strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-bold text-gray-800 text-[15px]">贴心派送</div>
                <div className="text-[11px] text-gray-400 mt-1">覆盖全美50个洲</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="text-[#2B66FF] mr-3">
                  <Package size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-[15px]">大票直达</div>
                  <div className="text-[11px] text-gray-400 mt-1">批量寄件 省心省时</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="text-[#2B66FF] mr-3">
                  <Grid size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-gray-800 text-[15px]">货物保管</span>
                    <span className="bg-[#FF4D4F] text-white text-[9px] px-1 py-0.5 rounded-sm leading-none scale-90 origin-left">敬请期待</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-1">无忧存 免保1月</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 flex items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="text-[#2B66FF] mr-3">
                  <Archive size={26} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-[15px]">精准整柜</div>
                  <div className="text-[11px] text-gray-400 mt-1">提柜直达 时效更快</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Customer Service */}
      <div className="fixed right-0 top-[45%] bg-white rounded-l-full shadow-[0_2px_10px_rgba(0,0,0,0.1)] py-2 pl-3 pr-2 flex flex-col items-center z-40 cursor-pointer">
        <Headset className="text-[#2B66FF] mb-0.5" size={18} strokeWidth={2} />
        <span className="text-[10px] text-gray-600">客服</span>
      </div>

      {/* Bottom Notification */}
      {showNotification && (
        <div className="fixed bottom-[64px] left-0 right-0 px-4 pb-3 z-40 max-w-md mx-auto">
          <div className="bg-[#2B66FF] rounded-full px-3 py-2.5 flex items-center justify-between shadow-lg">
            <div className="flex items-center space-x-2 text-white">
              <X size={16} className="text-white/80 cursor-pointer" onClick={() => setShowNotification(false)} />
              <Volume2 size={18} className="text-[#8AB4F8]" fill="currentColor" />
              <span className="text-xs">关注公众号，随时接收物流信息</span>
            </div>
            <button className="bg-white text-[#2B66FF] text-xs px-3 py-1 rounded-full font-medium">
              去关注
            </button>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-2 pb-safe z-50 max-w-md mx-auto">
        <div className="flex flex-col items-center text-[#2B66FF] cursor-pointer">
          <Send size={22} strokeWidth={2} className="fill-current" />
          <span className="text-[10px] mt-1 font-medium">寄快递</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 cursor-pointer">
          <Search size={22} strokeWidth={2} />
          <span className="text-[10px] mt-1">查快递</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 cursor-pointer relative">
          <Ticket size={22} strokeWidth={2} />
          <span className="text-[10px] mt-1">福利</span>
          <span className="absolute -top-1 -right-3 bg-[#FF4D4F] text-white text-[8px] px-1 rounded-full border border-white leading-tight">领券</span>
        </div>
        <div className="flex flex-col items-center text-gray-400 cursor-pointer">
          <User size={22} strokeWidth={2} />
          <span className="text-[10px] mt-1">我的</span>
        </div>
      </div>
    </div>
  );
}


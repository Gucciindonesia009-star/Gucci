import React from 'react';
import { COLLECTION_PRODUCTS } from '../constants';
import { CollectionItem } from '../types';

interface CollectionsPageProps {
  onSelect: (item: CollectionItem) => void;
  isApproved: boolean;
}

export const CollectionsPage: React.FC<CollectionsPageProps> = ({ onSelect, isApproved }) => {
  return (
    <div className="animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl text-gucci-red italic mb-2">The Alchemist's Garden</h2>
        <p className="text-xs uppercase tracking-widest text-gray-500">Exclusive Collection</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {COLLECTION_PRODUCTS.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="relative aspect-square overflow-hidden mb-6 bg-gray-50">
              <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-[10px] font-bold tracking-widest uppercase">
                {item.benefitPercent} Benefit
              </div>
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-serif text-xl text-gray-900">{item.name}</h3>
            </div>
            
            <div className="border-t border-gray-200 py-4 my-2 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Price</span>
                <span className="font-medium">{item.price}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Est. Profit</span>
                <span className="font-medium text-green-700">{item.profitAmount}</span>
              </div>
            </div>

            <button
              onClick={() => onSelect(item)}
              className="mt-auto w-full bg-[#962023] text-white py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-red-900 transition-colors"
            >
              Request Collection
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
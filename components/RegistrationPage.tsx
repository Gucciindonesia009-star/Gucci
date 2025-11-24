import React, { useState } from 'react';
import { User, Phone, Lock, Key, UserPlus, Share2, LogIn } from 'lucide-react';

interface RegistrationPageProps {
  onSuccess: () => void;
}

export const RegistrationPage: React.FC<RegistrationPageProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
    inviteCode: ''
  });
  const [error, setError] = useState('');
  const [isLoginMode, setIsLoginMode] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = () => {
    // Simple validation
    if (isLoginMode) {
      if (!formData.phone || !formData.password) {
        setError("Mohon isi nomor telepon dan kata sandi");
        return;
      }
      // Simulate login success for demo purposes
      onSuccess();
      return;
    }

    // Registration Validation
    if (!formData.username || !formData.phone || !formData.password || !formData.inviteCode) {
      setError("Mohon lengkapi semua data pendaftaran");
      return;
    }

    if (formData.inviteCode !== '080900') {
      setError("Kode undangan salah. Silakan periksa kembali.");
      return;
    }

    // Success
    onSuccess();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link berhasil disalin!");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Background Effect */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center filter blur-sm scale-110"
        style={{ backgroundImage: "url('https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1584556204/625850_17GC0_8163_001_100_0000_Light-Gucci-Off-The-Grid-tote-bag.jpg')" }}
      ></div>
      
      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/80 to-black"></div>

      <div className="z-10 w-full max-w-sm relative animate-fadeIn">
         {/* Share Button */}
         <div className="flex justify-end mb-6">
             <button 
               onClick={handleCopyLink}
               className="flex items-center gap-2 bg-[#1a1a1a] text-[#c5a059] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-[#333] border border-[#c5a059]/40 transition-colors shadow-lg"
             >
                 Salin Link <Share2 size={12} />
             </button>
         </div>

         {/* Card Container */}
         <div className="bg-[#111111]/90 backdrop-blur-xl p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Top Red Stripe Decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-900 via-red-900 to-green-900 opacity-50"></div>

             {/* Logo Section */}
             <div className="text-center mb-8">
                 <h1 className="text-5xl font-serif text-[#c5a059] tracking-widest mb-3 drop-shadow-md">GUCCI</h1>
                 <p className="text-[9px] text-gray-400 uppercase tracking-[0.4em] font-medium">
                   {isLoginMode ? 'Masuk Akun' : 'Pendaftaran Anggota'}
                 </p>
             </div>

             {/* Form Inputs */}
             <div className="space-y-4">
                {!isLoginMode && (
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#c5a059] transition-colors" size={18} />
                        <input 
                            type="text" 
                            name="username"
                            placeholder="Buat ID Pengguna"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full bg-[#1a1a1a] border border-[#333] focus:border-[#c5a059] text-gray-100 pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all placeholder:text-gray-600 text-sm font-medium"
                        />
                    </div>
                )}

                <div className="relative group">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#c5a059] transition-colors" size={18} />
                    <input 
                        type="tel" 
                        name="phone"
                        placeholder="Nomor Telepon"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-[#1a1a1a] border border-[#333] focus:border-[#c5a059] text-gray-100 pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all placeholder:text-gray-600 text-sm font-medium"
                    />
                </div>

                <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#c5a059] transition-colors" size={18} />
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Kata Sandi"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full bg-[#1a1a1a] border border-[#333] focus:border-[#c5a059] text-gray-100 pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all placeholder:text-gray-600 text-sm font-medium"
                    />
                </div>

                {!isLoginMode && (
                    <div className="relative group">
                        <Key className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#c5a059] transition-colors" size={18} />
                        <input 
                            type="text" 
                            name="inviteCode"
                            placeholder="Kode Undangan"
                            value={formData.inviteCode}
                            onChange={handleChange}
                            className="w-full bg-[#1a1a1a] border border-[#333] focus:border-[#c5a059] text-gray-100 pl-12 pr-4 py-3.5 rounded-lg outline-none transition-all placeholder:text-gray-600 text-sm font-medium"
                        />
                    </div>
                )}
             </div>

             {/* Error Message */}
             {error && (
                 <div className="bg-red-900/20 border border-red-900/50 p-2 mt-4 rounded text-center">
                    <p className="text-red-400 text-[10px] font-bold tracking-wide uppercase">{error}</p>
                 </div>
             )}

             {/* Main Action Button */}
             <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#b08d4b] to-[#c5a059] hover:from-[#c5a059] hover:to-[#dbb56e] text-black font-bold uppercase tracking-[0.2em] text-xs py-4 rounded-lg mt-8 transition-all transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
             >
                {isLoginMode ? 'MASUK AKUN' : 'DAFTAR AKUN'}
                {isLoginMode ? <LogIn size={16} /> : <UserPlus size={16} />}
             </button>

             {/* Toggle Login/Register */}
             <div className="text-center mt-6 pt-4 border-t border-white/5">
                 <button 
                    onClick={() => { setIsLoginMode(!isLoginMode); setError(''); }}
                    className="text-[#c5a059] text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors"
                 >
                    {isLoginMode ? 'Belum punya akun? Daftar' : 'SUDAH PUNYA AKUN? MASUK'}
                 </button>
             </div>

             {/* Footer Note */}
             {!isLoginMode && (
                 <p className="text-gray-500 text-[9px] text-center mt-4 leading-relaxed font-medium">
                     Pastikan Kode Undangan valid <span className="text-[#c5a059]">(080900)</span> untuk bergabung.
                 </p>
             )}
         </div>
         
         <div className="text-center mt-8 opacity-40">
            <p className="text-[8px] text-white uppercase tracking-[0.3em]">Gucci Official Member Access</p>
         </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};
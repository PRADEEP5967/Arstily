'use client';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MultiSelectDropdown from '../../../components/MultiSelectDropdown';
import Image from 'next/image';

const categories = ['Singers', 'Dancers', 'Speakers', 'DJs', 'Indian Singers', 'Indian Actresses', 'Indian Models', 'Indian DJs'];
const languages = ['English', 'Spanish', 'French', 'Hindi', 'Mandarin'];
const feeRanges = ['$500 - $1,000', '$1,000 - $2,000', '$2,000+'];

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  bio: yup.string().required('Bio is required'),
  categories: yup.array().of(yup.string().required()).min(1, 'Select at least one category').required('Select at least one category'),
  languages: yup.array().of(yup.string().required()).min(1, 'Select at least one language').required('Select at least one language'),
  feeRange: yup.string().required('Fee range is required'),
  location: yup.string().required('Location is required'),
  // image: yup.mixed().nullable().notRequired(), // removed for type compatibility
});

interface OnboardArtistForm {
  name: string;
  bio: string;
  categories: string[];
  languages: string[];
  feeRange: string;
  location: string;
  image?: FileList | null;
}

function saveArtistToLocalStorage(artist: Record<string, unknown>) {
  const key = 'artistly_onboarded_artists';
  const current = JSON.parse(localStorage.getItem(key) || '[]');
  localStorage.setItem(key, JSON.stringify([artist, ...current]));
}

export default function OnboardArtist() {
  const { register, handleSubmit, control, formState: { errors }, reset, watch } = useForm<OnboardArtistForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      bio: '',
      categories: [],
      languages: [],
      feeRange: '',
      location: '',
      image: undefined,
    },
  });
  const imageFile = watch('image') ?? [];
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  React.useEffect(() => {
    if (Array.isArray(imageFile) && imageFile.length > 0 && imageFile[0]) {
      const reader = new FileReader();
      reader.onload = e => setImagePreview(e.target?.result as string);
      reader.readAsDataURL(imageFile[0]);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  const onSubmit = async (data: OnboardArtistForm) => {
    let imageDataUrl = imagePreview;
    const hasImage = (img: FileList | null | undefined): img is FileList => !!img && img.length > 0;
    if (!imageDataUrl && hasImage(data.image)) {
      const reader = new FileReader();
      const fileList = data.image;
      imageDataUrl = await new Promise<string>(resolve => {
        reader.onload = e => resolve(e.target?.result as string);
        reader.readAsDataURL(fileList[0]);
      });
    }
    const artist = { ...data, image: imageDataUrl };
    saveArtistToLocalStorage(artist);
    alert('Artist submitted! Check localStorage for data.');
    setImagePreview(null);
    reset();
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 relative overflow-hidden">
      {/* Animated Gradient Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-200 via-pink-100 to-yellow-100 rounded-full blur-3xl opacity-40 animate-float pointer-events-none z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 rounded-full blur-3xl opacity-30 animate-float2 pointer-events-none z-0"></div>
      {/* Header with modern gradient and animation */}
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-400 mb-8 text-center drop-shadow-lg tracking-tight z-10 relative animate-fade-in">
        Artist Onboarding
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-7 bg-white rounded-3xl shadow-2xl p-8 z-10 relative animate-fade-in-up"
      >
        {/* Name */}
        <div>
          <label className="block font-semibold text-blue-700 mb-1">Name <span className="text-red-500">*</span></label>
          <input
            {...register('name')}
            className="border border-blue-200 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Artist Name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        {/* Bio */}
        <div>
          <label className="block font-semibold text-blue-700 mb-1">Bio <span className="text-red-500">*</span></label>
          <textarea
            {...register('bio')}
            className="border border-blue-200 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
            rows={3}
            placeholder="Tell us about the artist"
          />
          {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>}
        </div>
        {/* Categories */}
        <div>
          <Controller
            control={control}
            name="categories"
            render={({ field }) => (
              <MultiSelectDropdown
                label="Category *"
                options={categories}
                value={field.value ?? []}
                onChange={field.onChange}
                placeholder="Select categories"
              />
            )}
          />
          {errors.categories && <p className="text-red-500 text-sm mt-1">{errors.categories.message}</p>}
        </div>
        {/* Languages */}
        <div>
          <Controller
            control={control}
            name="languages"
            render={({ field }) => (
              <MultiSelectDropdown
                label="Languages Spoken *"
                options={languages}
                value={field.value ?? []}
                onChange={field.onChange}
                placeholder="Select languages"
              />
            )}
          />
          {errors.languages && <p className="text-red-500 text-sm mt-1">{errors.languages.message}</p>}
        </div>
        {/* Fee Range */}
        <div>
          <label className="block font-semibold text-blue-700 mb-1">Fee Range <span className="text-red-500">*</span></label>
          <select
            {...register('feeRange')}
            className="border border-blue-200 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="">Select...</option>
            {feeRanges.map(fee => <option key={fee} value={fee}>{fee}</option>)}
          </select>
          {errors.feeRange && <p className="text-red-500 text-sm mt-1">{errors.feeRange.message}</p>}
        </div>
        {/* Profile Image */}
        <div>
          <label className="block font-semibold text-blue-700 mb-1">Profile Image <span className="text-gray-400 font-normal">(optional)</span></label>
          <input
            type="file"
            {...register('image')}
            className="border border-blue-200 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            accept="image/*"
          />
          {imagePreview && (
            <div className="flex items-center gap-3 mt-2">
              {/* Animated Image Ring */}
              <span className="relative inline-block">
                <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-pink-300 to-yellow-200 blur-sm opacity-40 animate-spin-slow"></span>
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={96}
                  height={96}
                  className="w-24 h-24 object-cover rounded-full border-4 border-white shadow-lg z-10 relative transition-transform duration-300"
                />
              </span>
              <span className="text-sm text-gray-500">Preview</span>
            </div>
          )}
        </div>
        {/* Location */}
        <div>
          <label className="block font-semibold text-blue-700 mb-1">Location <span className="text-red-500">*</span></label>
          <input
            {...register('location')}
            className="border border-blue-200 rounded-xl px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="City, Country"
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
        </div>
        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-500 text-white rounded-2xl px-4 py-3 font-semibold shadow-lg hover:from-blue-700 hover:to-purple-600 transition-all duration-200 text-lg flex items-center justify-center gap-2 hover:-translate-y-1"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          Submit Artist
        </button>
      </form>
      {/* Modern floating animation keyframes */}
      <style jsx>{`
        .animate-float {
          animation: float 8s ease-in-out infinite alternate;
        }
        .animate-float2 {
          animation: float2 7s ease-in-out infinite alternate;
        }
        @keyframes float {
          0% { transform: translateY(0px) scale(1);}
          100% { transform: translateY(40px) scale(1.05);}
        }
        @keyframes float2 {
          0% { transform: translateY(0px) scale(1);}
          100% { transform: translateY(-30px) scale(1.04);}
        }
        .animate-fade-in {
          animation: fadeIn 1s ease both;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes fadeIn {
          from { opacity: 0;}
          to { opacity: 1;}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </main>
  );
} 
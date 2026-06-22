import type { ProductSortOption } from "@/types/product";

interface ProductFiltersProps {
  query: string;
  category: string;
  skinType: string;
  concern: string;
  sortBy: ProductSortOption;
  categories: string[];
  skinTypes: string[];
  concerns: string[];
  onQueryChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onSkinTypeChange: (value: string) => void;
  onConcernChange: (value: string) => void;
  onSortChange: (value: React.SetStateAction<ProductSortOption>) => void;
  onReset: () => void;
}

const selectClassName =
  "w-full rounded-2xl border border-[#dae8e0] bg-white px-4 py-3 text-sm text-[#4c6b5b] shadow-sm outline-none transition focus:border-[#b0cbbd] focus:ring-2 focus:ring-[#c0dfcf]";

export function ProductFiltersPanel({
  query,
  category,
  skinType,
  concern,
  sortBy,
  categories,
  skinTypes,
  concerns,
  onQueryChange,
  onCategoryChange,
  onSkinTypeChange,
  onConcernChange,
  onSortChange,
  onReset,
}: ProductFiltersProps) {
  return (
    <div className="rounded-[30px] border border-[#e2ede7] bg-white p-5 shadow-[0_18px_50px_rgba(122,86,69,0.08)]">
      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-5">
        <label className="flex flex-col gap-2 xl:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#719582]">Cari</span>
          <input
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Cari produk, merek, atau bahan"
            className={selectClassName}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#719582]">Kategori</span>
          <select value={category} onChange={(event) => onCategoryChange(event.target.value)} className={selectClassName}>
            <option value="">Semua kategori</option>
            {categories.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#719582]">Jenis kulit</span>
          <select value={skinType} onChange={(event) => onSkinTypeChange(event.target.value)} className={selectClassName}>
            <option value="">Semua jenis kulit</option>
            {skinTypes.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#719582]">Kebutuhan</span>
          <select value={concern} onChange={(event) => onConcernChange(event.target.value)} className={selectClassName}>
            <option value="">Semua kebutuhan</option>
            {concerns.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#719582]">Urutkan</span>
          <select value={sortBy} onChange={(event) => onSortChange(event.target.value as ProductSortOption)} className={selectClassName}>
            <option value="featured">Unggulan</option>
            <option value="rating-desc">Rating tertinggi</option>
            <option value="price-asc">Harga rendah ke tinggi</option>
            <option value="price-desc">Harga tinggi ke rendah</option>
            <option value="name-asc">Nama A-Z</option>
          </select>
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#eaf2ee] pt-5 text-sm text-[#5a6e62]">
        <div className="flex flex-wrap gap-2">
          {query ? <span className="rounded-full bg-[#ebf3ef] px-3 py-1">Pencarian: {query}</span> : null}
          {category ? <span className="rounded-full bg-[#ebf3ef] px-3 py-1">Kategori: {category}</span> : null}
          {skinType ? <span className="rounded-full bg-[#ebf3ef] px-3 py-1">Kulit: {skinType}</span> : null}
          {concern ? <span className="rounded-full bg-[#ebf3ef] px-3 py-1">Kebutuhan: {concern}</span> : null}
        </div>
        <button type="button" onClick={onReset} className="font-semibold text-[#60796b] transition hover:text-[#4c6b5b]">
          Atur ulang
        </button>
      </div>
    </div>
  );
}

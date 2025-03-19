"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const HorizontalFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchValue, setSearchValue] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [prescription, setPrescription] = useState("");

  // Function to update URL params
  const updateFilters = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="grid grid-cols-12 gap-4 p-4 border rounded-lg w-full border-gray-300 mb-5">
      <div className="col-span-12 md:col-span-6 lg:col-span-5">
        <div className="flex justify-center gap-2">
          {/* Price Filter */}
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Price:</span>
            <Input
              type="number"
              placeholder="Min"
              className="w-20 text-center border-gray-300"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
                updateFilters("minPrice", e.target.value);
              }}
            />
            <span>-</span>
            <Input
              type="number"
              placeholder="Max"
              className="w-20 text-center border-gray-300"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                updateFilters("maxPrice", e.target.value);
              }}
            />
          </div>

          {/* Category Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="border-gray-300" asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {category || "Category"} <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white" align="start">
              {[
                "Pain Relief",
                "Antibiotics",
                "Supplements",
                "Gastrointestinal",
                "Cardiovascular",
                "Diabetes Management",
                "Respiratory",
                "Neurological",
                "Dermatology",
                "Allergy & Immunology",
              ].map((cat) => (
                <DropdownMenuItem
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    updateFilters("category", cat);
                  }}
                >
                  {cat}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Sort & Prescription */}
      <div className="col-span-12 md:col-span-6 lg:col-span-3">
        <div className="flex justify-center gap-3">
          {/* Sort By Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="border-gray-300" asChild>
              <Button variant="outline" className="flex items-center gap-2">
                {sortBy
                  ? sortBy === "asc"
                    ? "Low to High"
                    : "High to Low"
                  : "Price Order"}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white" align="start">
              <DropdownMenuItem
                onClick={() => {
                  setSortBy("asc");
                  updateFilters("sortOrder", "asc");
                }}
              >
                Low to High
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setSortBy("desc");
                  updateFilters("sortOrder", "desc");
                }}
              >
                High to Low
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Prescription Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="border-gray-300" asChild>
              <Button variant="outline" className="text-sm flex items-center gap-2">
                {prescription || "Prescription"}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white" align="start">
              <DropdownMenuItem
                onClick={() => {
                  setPrescription("Required");
                  updateFilters("prescription", "required");
                }}
              >
                Required
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setPrescription("Not Required");
                  updateFilters("prescription", "not-required");
                }}
              >
                Not Required
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Search Bar */}
      <div className="col-span-12 md:col-span-12 lg:col-span-4 mx-auto">
        <div className="flex justify-center">
          <div className="max-w-md flex-grow flex items-center border border-gray-300 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Search Your Medicine"
              className="w-full px-5 py-2 outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              onClick={() => {
                if (searchValue.trim()) {
                  updateFilters("search", searchValue);
                  setSearchValue("");
                }
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition cursor-pointer"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalFilter;

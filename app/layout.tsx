import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ErrorContextProvider } from "@/contexts/ErrorContext";
import { DataProvider } from "@/contexts/DataContext";
import { DeviceTypeProvider } from "@/contexts/DeviceTypeContext";
import { FilteredDataProvider } from "@/contexts/FilterKindContext";
import { SortProvider } from "@/contexts/SortContext";
import { DialogTabsProvider } from "@/contexts/DialogTabs";
import { SearchFilterProvider } from "@/contexts/SearchFilterContext";
import { SelectedSortTypeProvider } from "@/contexts/SelectedSortTypeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adhopemedia",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/kero1.svg" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <DeviceTypeProvider>
          <FilteredDataProvider>
            <SearchFilterProvider>
              <SelectedSortTypeProvider>
                <ErrorContextProvider>
                  <DataProvider>
                    <SortProvider>
                      <DialogTabsProvider>{children}</DialogTabsProvider>
                    </SortProvider>
                  </DataProvider>
                </ErrorContextProvider>
              </SelectedSortTypeProvider>
            </SearchFilterProvider>
          </FilteredDataProvider>
        </DeviceTypeProvider>
      </body>
    </html>
  );
}

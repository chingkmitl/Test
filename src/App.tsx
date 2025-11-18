import { useState, useCallback } from 'react';
import { searchEquipment } from './services/data';
import { SearchResult } from './types';
import { SearchIcon, InfoIcon, CategoryIcon, NumberIcon, PriceIcon } from './components/icons';

const Header = () => (
  <header className="bg-white shadow-md p-4 flex items-center space-x-4">
    <img src="https://i.ibb.co/6yLLdtD/pea-logo.png" alt="PEA Logo" className="h-16 w-16" />
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-purple-800">ระบบตรวจสอบข้อมูลครุภัณฑ์</h1>
      <p className="text-gray-500">การไฟฟ้าส่วนภูมิภาค (กฟภ.)</p>
    </div>
  </header>
);

const ResultCard: React.FC<{ item: SearchResult }> = ({ item }) => {
  const formattedPrice = item.price ? new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(item.price) : 'N/A';

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col h-full">
      <div className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-purple-800 mb-3">{item.name}</h3>
        <div className="space-y-3 text-gray-700">
          <p className="flex items-center"><CategoryIcon /> <strong>หมวด:</strong><span className="ml-2">{item.category}</span></p>
          <p className="flex items-center"><NumberIcon /> <strong>ลำดับที่:</strong><span className="ml-2">{item.id}</span></p>
          <p className="flex items-center"><PriceIcon /> <strong>ราคากลาง:</strong><span className="ml-2 font-semibold text-green-700">{formattedPrice}</span></p>
        </div>
        {item.note && (
          <div className="mt-4 p-3 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 text-sm rounded-r-lg">
            <p><InfoIcon/>{item.note}</p>
          </div>
        )}
      </div>
      <div className="bg-gray-100 px-5 py-2 text-right text-sm text-gray-500">
        หน่วยนับ: {item.unit}
      </div>
    </div>
  );
};

export default function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [groupedResults, setGroupedResults] = useState<{ [key: string]: SearchResult[] }>({});
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = useCallback(() => {
    setHasSearched(true);
    const searchResults = searchEquipment(query);
    setResults(searchResults);

    // FIX: Use a generic argument on `reduce` to explicitly type the accumulator. This ensures the resulting `groups` object has the correct type and prevents `items` from being inferred as `unknown` in the render logic.
    const groups = searchResults.reduce<{[key: string]: SearchResult[]}>((acc, item) => {
      (acc[item.category] = acc[item.category] || []).push(item);
      return acc;
    }, {});

    setGroupedResults(groups);
  }, [query]);
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/az-subtle.png')"}}>
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        <div className="bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold text-center text-gray-700 mb-1">ค้นหาข้อมูลครุภัณฑ์</h2>
          <p className="text-center text-gray-500 mb-6">พิมพ์ชื่อครุภัณฑ์หรือคำค้นหาที่เกี่ยวข้อง เช่น "แอร์", "โน้ตบุ๊ก", "รถยนต์"</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-grow">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="ระบุชื่อครุภัณฑ์..."
                className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-shadow"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400">
                <SearchIcon />
              </div>
            </div>
            <button
              onClick={handleSearch}
              className="bg-purple-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-colors flex items-center justify-center"
            >
              <SearchIcon />
              <span className="ml-2">ค้นหา</span>
            </button>
          </div>
        </div>

        <div className="mt-8">
            {hasSearched && results.length > 0 && (
                <div className="mb-6 text-center">
                    <p className="text-lg text-gray-700">พบผลลัพธ์ทั้งหมด <span className="font-bold text-purple-700">{results.length}</span> รายการ</p>
                </div>
            )}

            {hasSearched && results.length > 0 ? (
                <div className="space-y-8">
                {Object.entries(groupedResults).map(([category, items]) => (
                    <div key={category}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-purple-200 flex items-center">
                        <CategoryIcon /> <span className="ml-2">{category}</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((item) => (
                        <ResultCard key={`${item.category}-${item.id}-${item.name}`} item={item} />
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            ) : hasSearched && (
                <div className="text-center py-10 px-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
                    <h3 className="text-xl font-semibold text-gray-700">ไม่พบข้อมูล</h3>
                    <p className="text-gray-500 mt-2">ไม่พบครุภัณฑ์ที่ตรงกับคำค้นหาของคุณ ลองใช้คำค้นหาอื่น</p>
                </div>
            )}
        </div>
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm mt-8">
        <p>&copy; 2024 Provincial Electricity Authority. All rights reserved.</p>
      </footer>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { BubbleSort } from './Sortings/BubbleSort';
import { SelectionSort } from './Sortings/SelectionSort';
import { InserionSOrt } from './Sortings/InsertionSort';
import { MergeSort } from './Sortings/MergeSort';
import { QuickSort } from './Sortings/QuickSort';
import { HeapSort } from './Sortings/HeapSort';
import { BucketSort } from './Sortings/BucketSort';
import { CountSort } from './Sortings/COuntSort';

function App() {
  const [arr, setArr] = useState([]);
  const [comparing, setComparing] = useState([]);

  const generateNewArray = () => {
    const random = Array.from({ length: 160 }, () =>
      Math.floor(Math.random() * 20 + 5)
    );
    setArr(random);
  };

  useEffect(() => {
    generateNewArray();
  }, []);

  return (
    <div className="min-h-screen bg-[#1f1f1f] flex flex-col items-center px-4 py-6 font-mono">
      <header className="w-full text-center text-3xl font-bold text-[#e2e8f0] mb-6">
         Chalkboard Sorting Visualizer
      </header>

      {/* Sorting Bars */}
      <div className="flex items-end h-[400px] w-full max-w-7xl bg-[#2a2a2a] border border-[#444] rounded-md shadow-lg p-4 overflow-x-auto mb-10">
        {arr.map((value, id) => {
          const isBeingCompared = comparing.includes(id);
          return (
            <div
              key={id}
              className={`mx-[1px] transition-all duration-100 rounded-sm ${
                isBeingCompared ? 'bg-[#c300ff]' : 'bg-[#edf0f4]'
              }`}
              style={{
                height: `${value * 10}px`,
                width: '8px',
              }}
            ></div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap justify-center gap-3 max-w-5xl">
        <button
          onClick={generateNewArray}
          className="px-4 py-2 text-sm rounded-md bg-[#334155] text-white hover:bg-[#475569] transition"
        >
          🎲 Generate New Array
        </button>

        <SortButton label="Bubble Sort" onClick={() => BubbleSort(arr, setArr, setComparing, 10)} color="sky" />
        <SortButton label="Selection Sort" onClick={() => SelectionSort(arr, setArr, setComparing)} color="lime" />
        <SortButton label="Insertion Sort" onClick={() => InserionSOrt(arr, setArr, setComparing)} color="green" />
        <SortButton label="Merge Sort" onClick={() => MergeSort(arr, setArr, setComparing)} color="amber" />
        <SortButton label="Quick Sort" onClick={() => QuickSort(arr, setArr, setComparing)} color="rose" />
        <SortButton label="Heap Sort" onClick={() => HeapSort(arr, setArr, setComparing)} color="violet" />
        <SortButton label="Bucket Sort" onClick={() => BucketSort(arr, setArr, setComparing)} color="cyan" />
        <SortButton label="Count Sort" onClick={() => CountSort(arr, setArr, setComparing)} color="slate" />
      </div>
    </div>
  );
}

// A reusable button component with pastel highlights
const SortButton = ({ label, onClick, color }) => {
  const baseColors = {
    pink: 'bg-pink-200 hover:bg-pink-300',
    lime: 'bg-lime-200 hover:bg-lime-300',
    green: 'bg-green-200 hover:bg-green-300',
    amber: 'bg-amber-200 hover:bg-amber-300',
    rose: 'bg-rose-200 hover:bg-rose-300',
    violet: 'bg-violet-200 hover:bg-violet-300',
    cyan: 'bg-cyan-200 hover:bg-cyan-300',
    red: 'bg-red-200 hover:bg-red-300',
    sky: 'bg-sky-200 hover:bg-sky-300',
    slate: 'bg-slate-300 hover:bg-slate-400',
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-semibold rounded-md text-gray-900 ${baseColors[color]} transition`}
    >
      {label}
    </button>
  );
};


export default App;

import { Info } from 'lucide-react'

export function ServicePriceNotes() {
  return (
    <div className="mt-8 p-6 bg-white rounded-2xl shadow-md fancy-border">
      <h4 className="text-xl font-dancing font-semibold text-green-800 mb-4 flex items-center">
        <Info className="h-5 w-5 mr-2 text-green-500" />
        <span>Important Notes:</span>
      </h4>
      <ul className="text-gray-700 space-y-3">
        <li className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3"></span>
          Mobile Artistry service available
        </li>
        <li className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3"></span>
          No refunds
        </li>
        <li className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3"></span>
          Book in time
        </li>
        <li className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3"></span>
          Bridal glam package is inclusive of trials
        </li>
        <li className="flex items-center">
          <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-3"></span>
          Prices are exclusive of transportation fee and vary according to location
        </li>
      </ul>
    </div>
  )
}
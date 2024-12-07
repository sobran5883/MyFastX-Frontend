import { NavLink } from "react-router-dom"
function ShippingRate() {
  return (
    <div className="w-full text-white bg-pale-mint py-20 flex flex-col items-center justify-center">
        <div role="tablist" className="bg-transparent w-11/12 rounded-t-md mb-[7px]">
            <a className="rounded-tl-md cursor-pointer bg-deep-green p-2" role="tab" href="">
              <input type="checkbox" value="parcel" checked="" name="order[shipments_attributes][0][load_type]" className="checkbox checkbox-info hidden"/>
              <label><span className="label-text text-black font-semibold cursor-pointer">Parcel</span></label>
            </a>            
            <a className="rounded-tr-md cursor-pointer bg-gray-300 p-2" role="tab" href="">
              <input type="checkbox" value="document" name="order[shipments_attributes][0][load_type]" className="checkbox checkbox-info hidden"/>
              <label><span className="label-text text-black font-semibold cursor-pointer">Document</span></label>
            </a>
        </div>
        <div className="w-11/12 bg-gray-800 rounded-md rounded-tl-none">
            <div className="md:grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-12 gap-x-2 px-4 md:py-10">
                <div className="lg:col-span-3 col-span-1 relative py-2" data-controller="autoComplete" data-autoComplete-url-value="/postcodes" aria-expanded="false" data-autoComplete-ready-value="true">
                  <div className="form-control flex flex-col">
                    <label className="label text-sm mb-2" htmlFor="order_origin">Pickup postcode <abbr title="required" className="text-warning text-red-500 no-underline">*</abbr></label>
                    <input className="input text-black input-bordered p-2 focus:border-blue-500 focus:ring-blue-500 border-gray-300 rounded-md" autoComplete="off" spellCheck="false" type="search" data-autoComplete-target="input" inputMode="numeric" maxLength="6" minLength="6" required="required" aria-required="true" placeholder="400091" size="6" name="order[origin]" id="order_origin"/>
                  </div>
                    <input className="input input-bordered focus:ring-blue-500 border-gray-300 rounded-md" autoComplete="off" spellCheck="off" data-autoComplete-target="hidden" data-action="change->serviceability#check" required="required" aria-required="true" type="hidden" name="order[origin]" id="order_origin"/>
                    <ul className="absolute z-10 dropdown-content shadow bg-base-100 rounded-md w-64" data-autoComplete-target="results" hidden=""></ul>
                    <div className="input-hint-message text-xs mt-2 text-gray-500">Six digits pickup postcode</div>
                </div>
                <div className="lg:col-span-3 col-span-1 relative py-2" data-controller="autoComplete" data-autoComplete-url-value="/postcodes" aria-expanded="false" data-autoComplete-ready-value="true">
                  <div className="form-control flex mb-2 flex-col">
                    <label className="label text-sm mb-2" htmlFor="order_destination">Delivery postcode <abbr title="required" className="text-warning text-red-500 no-underline">*</abbr></label>
                    <input className="input text-black input-bordered p-2 focus:border-blue-500 focus:ring-blue-500 border-gray-300 rounded-md" autoComplete="off" spellCheck="false" type="search" data-autoComplete-target="input" inputMode="numeric" maxLength="6" minLength="6" required="required" aria-required="true" placeholder="110001" size="6" name="order[destination]" id="order_destination"/>
                  </div>
                    <input className="input input-bordered focus:border-blue-500 focus:ring-blue-500 border-gray-300 rounded-md" autoComplete="off" spellCheck="off" data-autoComplete-target="hidden" required="required" aria-required="true" type="hidden" name="order[destination]" id="order_destination"/>
                    <ul className="absolute z-10 dropdown-content shadow bg-base-100 rounded-md w-64" data-autoComplete-target="results" hidden=""></ul>
                    <div className="input-hint-message text-xs mt-2 text-gray-500">Six digits delivery postcode</div>
                </div>
                <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-4 gap-x-2 gap-y-2 py-2 w-full text-black">
                  <div className="form-control"><label className="label text-sm text-white">Weight (Kg) <abbr title="required" className="text-warning text-red-500 no-underline">*</abbr></label><label className="input-group mt-1 flex"><input className="input input-bordered rounded-l-md pl-2 focus:border-blue-500 focus:ring-blue-500 border-gray-300 w-full" autoComplete="off" spellCheck="off" inputMode="decimal" maxLength="4" required="required" aria-required="true" placeholder="1.2" size="4" type="text" name="order[shipments_attributes][0][weight]" id="order_shipments_attributes_0_weight"/><span className="border rounded-r-md bg-blue-100 border-l-0 border-blue-300 lg:text-sm text-primary text-black px-2 py-2">KG</span></label></div>
                  <div className="form-control"><label className="label text-sm text-white">Length (CM) <abbr title="required" className="text-warning text-red-500 no-underline">*</abbr></label><label className="input-group mt-1 flex"><input className="input input-bordered rounded-l-md pl-2 focus:border-blue-500 focus:ring-blue-500 border-gray-300 w-full" autoComplete="off" spellCheck="off" inputMode="numeric" maxLength="4" required="required" aria-required="true" placeholder="32" size="4" type="text" name="order[shipments_attributes][0][length]" id="order_shipments_attributes_0_length"/><span className="border rounded-r-md bg-blue-100 border-l-0 border-blue-300 lg:text-sm text-primary text-black px-2 py-2">CM</span></label></div>
                  <div className="form-control"><label className="label text-sm text-white">Breadth (CM) <abbr title="required" className="text-warning text-red-500 no-underline">*</abbr></label><label className="input-group mt-1 flex"><input className="input input-bordered rounded-l-md pl-2 focus:border-blue-500 focus:ring-blue-500 border-gray-300 w-full" autoComplete="off" spellCheck="off" inputMode="numeric" maxLength="4" required="required" aria-required="true" placeholder="22" size="4" type="text" name="order[shipments_attributes][0][breadth]" id="order_shipments_attributes_0_breadth"/><span className="border rounded-r-md bg-blue-100 border-l-0 border-blue-300 lg:text-sm text-primary text-black px-2 py-2">CM</span></label></div>
                  <div className="form-control"><label className="label text-sm text-white">Height (CM) <abbr title="required" className="text-warning text-red-500 no-underline">*</abbr></label><label className="input-group mt-1 flex"><input className="input input-bordered rounded-l-md pl-2 focus:border-blue-500 focus:ring-blue-500 border-gray-300 w-full" autoComplete="off" spellCheck="off" inputMode="numeric" maxLength="4" required="required" aria-required="true" placeholder="14" size="4" type="text" name="order[shipments_attributes][0][height]" id="order_shipments_attributes_0_height"/><span className="border rounded-r-md bg-blue-100 border-l-0 border-blue-300 lg:text-sm text-primary text-black px-2 py-2">CM</span></label></div>
                  
                  <div className="input-hint-message text-xs mt-2 text-gray-500 sm:col-span-4 col-span-2">Please enter exact packaged parcel weight in Kg and dimensions in CMs</div>
                  <input className="input input-bordered focus:border-blue-500 focus:ring-blue-500 border-gray-300 rounded-md" autoComplete="off" spellCheck="off" value="forward" type="hidden" name="order[shipments_attributes][0][direction]" id="order_shipments_attributes_0_direction"/>
                </div>
            </div>
            <div className="mx-8 pb-4 flex space-y-4 md:space-y-4 flex-col md:flex-row">
                <ul className="text-left text-bl flex md:flex-row md:space-x-4 md:space-y-0 space-y-2 flex-col mt-4 text-white order-last md:order-first">
                    <li className="text-sm font-medium underline hover:text-info hover:text-deep-green pt-2" data-turbo-frame="_top" rel="noopener noreferrer" ><NavLink to="/prohibited-items">Restricted items</NavLink></li>
                    <li className="text-sm font-medium underline hover:text-info hover:text-deep-green pt-2" data-turbo-frame="_top" rel="noopener noreferrer" ><NavLink to="/parcel-guide">Parcel size and weight guide</NavLink></li>
                    <li className="text-sm font-medium underline hover:text-info hover:text-deep-green pt-2" data-turbo-frame="_top" rel="noopener noreferrer"><NavLink to="/packaging-guide">Packaging guide</NavLink></li>
                </ul>
                <input type="submit" name="commit" value="Total Amount" className="btn btn-neutral btn-info btn-wide rounded-full ml-0 md:ml-8 py-2 px-6 bg-deep-green" data-disable-with="Total Amount"/>
            </div>
        </div>
    </div>
  )    
}    
    
export default ShippingRate

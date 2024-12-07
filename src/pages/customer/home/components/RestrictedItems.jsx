
import { IndianRupee, Gem, Flower2, Axe, Bomb, Biohazard, FlaskConical, Fuel, Magnet, PaintBucket, Battery, Bot, ThermometerSnowflake } from 'lucide-react'
function RestrictedItems() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <section className="md:py-20 py-10 bg-deep-green w-full">
        <div className="container text-center">
          <div className="flex justify-center items-center px-2">
            <h1 className="sm:text-6xl text-4xl font-bold tracking-wide text-white md:mr-4 mr-0">Restricted Items</h1>
          </div>
        </div>
      </section>
      <div className="container md:my-20 my-12 flex flex-col items-center">
        <div className='px-4'>
          <h1 className="text-3xl font-bold mb-8 px-2">Restricted items list</h1>
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-6 gap-x-2 gap-y-8">
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <Gem color='white'/>
                    </div>
                    <h1 className="card-title">Jewellery</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Precious stones, ornaments gems and jewellery</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <IndianRupee color='white'/>
                    </div>
                    <h1 className="card-title">Currency</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Uncrossed(bearer cheques) drafts/cheques, currency and coins</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <IndianRupee color='white'/>
                    </div>
                    <h1 className="card-title">Poison</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Poision, harmful liquids and other similar substances</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <Bomb color='white'/>
                    </div>
                    <h1 className="card-title">Explosives</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Firearms, explosives and military equipment.</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <PaintBucket color='white'/>
                    </div>
                    <h1 className="card-title">Paint</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Oil-based paint, Thinners (flammable liquids) and Industrial solvents</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <FlaskConical color='white'/>
                    </div>
                    <h1 className="card-title">Chemicals</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Insecticides, Garden chemicals (fertilizers, poisons)</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <Bot color='white'/>
                    </div>
                    <h1 className="card-title">Machinery</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Chain saws, outboard engine containing fuel or that have contained fuel </h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <Fuel color='white'/>
                    </div>
                    <h1 className="card-title">Fuels</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Fuel for camp stoves, lanterns, torches or heating elements</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <Biohazard color='white'/>
                    </div> 
                    <h1 className="card-title">Toxins</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Any compound, liquid or gas that has toxic characteristics</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <Battery color='white'/>
                    </div>
                    <h1 className="card-title">Batteries</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Automobile batteries, Lithium batteries and others</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <Axe color='white'/>
                    </div>
                    <h1 className="card-title">Firearms</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Arms, fire arms and ammunitions of any kind</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <ThermometerSnowflake color='white'/>
                    </div>
                    <h1 className="card-title">Dry Ice</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Dry ice in the forms of carbon dioxide or solid state</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <Flower2 color='white'/>
                    </div>
                    <h1 className="card-title">Plants</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Live plants, plant pots, debris and other plant products</h2>
                  </div>
                </div>
              </div>
              <div className="md:card card-compact bordered">
                <div className="card-body">
                  <div className="flex items-center md:space-x-4 space-x-2">
                    <div className='bg-deep-green text-4xl h-[52px] w-[52px] flex justify-center items-center rounded-full'>
                      <Magnet color='white'/>
                    </div>
                    <h1 className="card-title">Others</h1>
                  </div>
                  <div className="content mt-3 text-base">
                    <h2>Magnetized materials, Infectious substances, Flammable adhesives</h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="border-b my-16"></div>
        <div className="lg:w-2/3 w-full mx-auto text-lg font-light text-primary">
          <h1 className="text-3xl px-4 font-bold">Sending restrictions</h1>
          <p className="mt-4 px-4">You can send lots of things using Movery, but there are some things we can't accept or compensate for</p>
          <p className="mt-4 px-4">For each category below, you can find out which items are:</p>
          <p className="mt-4 px-4"><span className="font-bold">Excluded from compensation</span> – you can send them with us, but we can't provide cover or compensation for them</p>
          <p className="mt-4 px-4"><span className="font-bold">Restricted, not permitted in network</span> – we simply can't accept these items</p>
          <div className="mt-8 bg-pale-mint md:p-8 p-6">
            <h2 className="text-3xl font-bold">Fragile and personal / irreplaceable items</h2>
            <p className="mt-3">When sending fragile items, you'll need to make sure they're packed securely to make sure they arrive at their destination in one piece. While you can send some fragile items with Movery, there are a few limitations to bear in mind.</p>
            <h3 className="font-bold mt-5">Excluded from compensation</h3>
            <ul className="list-disc ml-6 mt-4">
              <li className="mt-4">All items that have been badly packaged.</li>
              <li className="mt-4">Ceramic or composite items of any description including without limitation mirrored items, crystal, ceramics, porcelain, plaster, marble, china, stone, slate, resin, granite, concrete (or any item containing these materials)</li>
              <li className="mt-4">Fossils, stones, marble, stoneware or any stone derivative</li>
              <li className="mt-4">Glass items or fragile items that contain glass parts including kitchen appliances</li>
              <li className="mt-4">Lighting equipment such as vehicle lights and light bulbs</li>
              <li className="mt-4">Cameras, lenses, spectacles and optical equipment such as telescopes or binoculars</li>
              <li className="mt-4">Liquids or items contained in glass or ceramics – please note ALL liquids are prohibited</li>
              <li className="mt-4">Paintings, prints or canvases</li>
              <li className="mt-4">Musical instruments including their cases or suitcases when used as external packaging</li>
              <li className="mt-4">Articles made largely or wholly of gold, silver or other precious metals</li>
              <li className="mt-4">Kitchen appliances such as white goods or electronic equipment with fragile/glass parts</li>
              <li className="mt-4">Resin, amber and composite items</li>
              <li className="mt-4">Plants, seeds, flowers and plant derivatives</li>
              <li className="mt-4">Antiques - objects over 100 years old</li>
              <li className="mt-4">Furniture - unless flat packed and safely packaged</li>
              <li className="mt-4">Cheques or dividend warrants which are uncrossed and made payable to the bearer, uncrossed postal orders which do not state to whom they are to be paid, bankers' drafts, bearer securities including share warrants, bonds or relative coupons un-franked postage or revenue stamps – except a revenue stamp embossed or impressed on an instrument which has been executed</li>
              <li className="mt-4">Coupons, vouchers, tokens, stamps, national insurance stamps, credit cards, debit cards, lottery tickets, scratch cards, SIM cards, tickets or passes such as for travel or events, currency notes or coins</li>
              <li className="mt-4">Documentation – such as passports, driving licenses, medical, employment, property or commercial records</li>
              <li className="mt-4">Memorabilia, photographs, signed items and vinyl records</li>
              <li className="mt-4">Diamonds and other precious stones, jewellery or watches with a value in excess of ₹ 100k or antique items</li>
            </ul>
            <h3 className="font-bold mt-5 text-red-600">Restricted items, not permitted in the network – do not send </h3>
            <ul className="list-disc ml-6 mt-4">
              <li className="mt-4">All liquids are prohibited – including gels, creams, pastes, lotions, oils, perfumes, aftershaves, paints, inks, enamels and varnishes including nail varnish</li>
              <li className="mt-4">Pressurised containers – such as aerosols, oxygen tanks or fire extinguishers</li>
              <li className="mt-4">Scripts or subscription certificates</li>
            </ul>
          </div>
          <div className="mt-8 bg-base-200 md:p-8 p-6">
            <h2 className="text-3xl font-bold">Appliances, mechanical items and/or electronics</h2>
            <p className="mt-3">If you need to send appliances or electronics, Movery can help. Just remember that some items won't be covered for compensation if they're lost or damaged. Make sure you note down any prohibited items too before you try to book a delivery.</p>
            <h3 className="font-bold mt-5">Excluded from compensation</h3>
            <ul className="list-disc ml-6 mt-4">
              <li className="mt-4">Cameras, lenses, spectacles and optical equipment such as telescopes or binoculars</li>
              <li className="mt-4">Glass items or fragile items that contain glass parts including kitchen appliances</li>
              <li className="mt-4">Kitchen appliances such as white goods, electronic equipment with fragile/glass parts</li>
              <li className="mt-4">Laptops and computers</li>
              <li className="mt-4">TVs and monitors</li>
              <li className="mt-4">Lighting equipment such as vehicle lights and light bulbs</li>
              <li className="mt-4">Internal damage to appliances, mechanical items or electronics is excluded from compensation</li>
            </ul>
            <h3 className="font-bold mt-5 text-red-600">Restricted items, not permitted in the network – do not send </h3>
            <ul className="list-disc ml-6 mt-4">
              <li className="mt-4">Batteries such as lithium batteries, unless included with the equipment they power</li>
              <li className="mt-4">Gardening and household tools, unless they are properly protected</li>
              <li className="mt-4">Vehicle parts – parts which are over our weight limit (15kg), that are outside of our dimension limits, or contain liquids</li>
            </ul>
          </div>
          <div className="mt-8 bg-base-200 md:p-8 p-6">
            <h2 className="text-3xl font-bold">Liquids, gels and/or perishables</h2>
            <p className="mt-3">A nice bottle of wine or a set of luxury toiletries is often the go-to gift for someone special, but they're best delivered in person as you can't send them with Movery.</p>
            <h3 className="font-bold mt-5">Excluded from compensation</h3>
            <ul className="list-disc ml-6 mt-4">
              <li className="mt-4">Any dangerous, hazardous, perishable or prohibited goods</li>
              <li className="mt-4">Perishable food or goods including chilled and frozen food, plants, seeds, flowers and plant derivatives</li>
              <li className="mt-4">Tobacco and tobacco products</li>
            </ul>
            <h3 className="font-bold mt-5 text-red-600">Restricted items, not permitted in the network – do not send </h3>
            <ul className="list-disc ml-6 mt-4">
              <li className="mt-4">All liquids are prohibited – including gels, creams, pastes, lotions and oils</li>
              <li className="mt-4">Oxidising substances and organic peroxide – these are substances such as disinfectants and may cause or contribute to combustion of other substances. They may also be liable to explosive decomposition, react dangerously with other substances and injure health. For example: bromides; chlorates; components of fibreglass repair kits; disinfectants; nitrates; perchlorates; permanganates and peroxides</li>
              <li className="mt-4">Pesticides – any chemical that is used to kill pests and insects</li>
              <li className="mt-4">Poisonous, toxic and infectious substances – substances that are liable to cause death or injury if swallowed or inhaled, or by skin contact</li>
              <li className="mt-4">Vehicle parts that contain liquids</li>
              <li className="mt-4">Cleaning products</li>
            </ul>
          </div>
          <div className="mt-8 bg-base-200 md:p-8 p-6">
            <h2 className="text-3xl font-bold">Dangerous and/or illegal goods</h2>
            <p className="mt-3">There are some items that we can't carry because they're illegal or too dangerous for our couriers to transport.</p>
            <h3 className="font-bold mt-5">Excluded from compensation</h3>
            <ul className="list-disc ml-6 mt-4">
              <li className="mt-4">Any dangerous, hazardous, perishable or prohibited goods</li>
              <li className="mt-4">Items which have been strapped together</li>
            </ul>
            <h3 className="font-bold mt-5 text-red-600">Restricted items, not permitted in the network – do not send </h3>
            <ul className="list-disc ml-6 mt-4">
              <li className="mt-4">All toxic substances are prohibited – such as arsenic; beryllium; cyanide; fluorine; hydrogen selenide; infectious substances containing micro organisms or their toxins which are known to cause – or are suspected of causing – disease; mercury; mercury salts; mustard gas; nitrobenzene; nitrogen dioxide; pesticides; serum and vaccines</li>
              <li className="mt-4">Illegal items – goods which are illegal, the carriage of which is illegal, or the supply of which to the recipient is illegal</li>
              <li className="mt-4">Oxidising substances and organic peroxide – these are substances such as disinfectants and may cause or contribute to combustion of other substances. They may also be liable to explosive decomposition, react dangerously with other substances and injure health. For example: bromides; chlorates; components of fibreglass repair kits; disinfectants; nitrates; per chlorates; permanganates and peroxides</li>
              <li className="mt-4">Perfumes and aftershaves – as well as being classNameed as liquids, these are flammable and are prohibited</li>
              <li className="mt-4">Pesticides – any chemical that is used to kill pests and insects</li>
              <li className="mt-4">Poisonous (toxic) and infectious substances – substances that are liable to cause death or injury if swallowed or inhaled, or by skin contact</li>
              <li className="mt-4">Weapons and replica weapons – including decorative, deactivated or air powered weapons</li>
              <li className="mt-4">Drugs – any medicinal, narcotic or psychoactive substance controlled under India's current Misuse of Drugs legislations including medical tests</li>
              <li className="mt-4">Pressurised containers – such as aerosols, oxygen tanks or fire extinguishers</li>
            </ul>
          </div>
          <div className="mt-8 bg-base-200 md:p-8 p-6">
            <h2 className="text-3xl font-bold">Live and/or biological goods</h2>
            <p className="mt-3">We are unable to carry most biological and any live goods. While you can use Movery to send some biological items, these are usually excluded from compensation. </p>
                  <h3 className="font-bold mt-5">Excluded from compensation</h3>
                  <ul className="list-disc ml-6 mt-4">
                    <li className="mt-4">Plants, seeds, flowers (dried or fresh) and plant derivatives</li>
                    <li className="mt-4">Real fur</li>
                  </ul>
                  <h3 className="font-bold mt-5 text-red-600">Restricted items, not permitted in the network – do not send </h3>
                  <ul className="list-disc ml-6 mt-4">
                    <li className="mt-4">Human and animal remains including, without limitation, ashes</li>
                    <li className="mt-4">Live animals and eggs – including but not limited to mammals, reptiles, fish, invertebrates, amphibians, birds, insects, larvae and pupae</li>
                    <li className="mt-4">Pathogens – things that can cause disease, such as a virus. Pathogens in the Risk Group 4 and selected Risk Group 3 listed in Schedule 9, Part 5 of the latest edition of the Control of Substances Hazardous to Health Regulations are prohibited. For example: clinical; environmental and medical waste; Ebola and anthrax.</li>
                  </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RestrictedItems;
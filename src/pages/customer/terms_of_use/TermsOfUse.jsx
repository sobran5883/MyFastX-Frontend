import { NavLink } from 'react-router-dom';
// import termsOfUse from '../../../assets/privacyPolicy and T&C/t&c.png'
const Terms=()=>{
    return(
        <div className="w-ful flex flex-col items-center justify-center">
            <div className="relative w-full flex items-center justify-center">
                <div className='w-full h-[150px] md:h-[300px] bg-black'>
                </div>
                <div className='absolute'>
                    <h1 className='text-white font-inter font-medium text-xl md:text-5xl'>Terms Of Use</h1>
                </div>
            </div>
            <div className="w-11/12 bg-pale-mint flex items-center justify-center flex-col p-2 md:p-6 my-2 rounded-md shadow-md shadow-deep-green">
                <div className="my-6 md:my-8 w-full ">
                    <div className='w-fit relative'>
                    <h1 className="text-xl md:text-3xl font-medium text-[#000000cc] font-roboto">Terms Of Use</h1>
                    <div className='absolute w-full h-[2px] md:h-[3px] bg-[#888787d8] -z-10 bottom-0'></div>
                    </div>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Welcome to MyFastX.. If you continue to browse and use our app/website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern MYFASTEX TECHNOLOGIES PVT LTD (Owner of MyFastX) relationship with you in relation to this app/website and the Services (as described below) <br/>
                        In the event there is a conflict between the terms and conditions specified herein and the provisions of any other document executed between the parties hereto, the terms and conditions specified herein would prevail.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">DEFINITIONS</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">The following definitions apply to the terms and conditions set out below that govern this contract of Carriage between you and us:</p>
                    <ul className="list-disc pl-6">
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">"We", "us", "our", "Carrier", "MyFastX", "Company" shall refer to MYFASTEX TECHNOLOGIES PVT LTD (owner of MyFastX), its employees, and its service providers that carry or undertake to carry the consignment hereunder or perform any other services incidental thereto on its behalf.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">“You”, “your”, “consignor” shall refer to the sender, consignor or consignee of the Consignment, holder of this Consignment Note, receiver and owner of the contents of the Consignment or any other party having a legal interest in those contents, as the case may be.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">“Services” means the services provided by MyFastX which enable the following:</li>
                        <ul className='list-[circle] pl-8 md:pl-12'>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>the services of goods transport of vehicles by Customers for a point-to-point service, or for time and usage-based service within city limits and outside the city limits, including inter-city all over India;</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>hiring of labour by Customers for loading/unloading of the consignment; and</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>such other services which MyFastX may from time to time</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>"Carriage" means and includes the whole of the operations and services undertaken by us in connection with the Consignment.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>"Consignment" means any package, parcel, sachet, or freight which is or are given to and accepted by us for carriage under our Consignment Note.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>“Dangerous Goods” means goods classified as dangerous as per ICAO T.I., IATA DGR, IMDG-Code, ADR or other national regulations for transport.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>“Delivery” means the tender of the consignment to the consignee or intimation about the arrival of the consignment.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>"Prohibited Items" means any goods or materials, the Carriage of which is prohibited by Applicable Law.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>“Receiver” or “Consignee” shall refer to the recipient or addressee or the consignee of the Consignment.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>“Applicable Law” means all laws, statutes, ordinances, regulations, guidelines, policies, rules, bye-laws, notifications, directions, directives and orders or other governmental restrictions or any similar form of decision of, or determination by, or any interpretation, administration and other pronouncements having the effect of law of the Republic of India or any other applicable jurisdiction by state, municipality, court, tribunal, government, ministry, department, commission, arbitrator or board or such other body which has the force of law in India.</li>
                        </ul>
                    </ul>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">USER(S) ELIGIBILITY</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">User(s) means any individual or business entity/ organization that legally operates in India or in other country, uses and has the right to use the Services provided by MyFastX. It is hereby being clarified that our Services are available only to those individuals or business entities/organizations who can form legally binding contracts under the Applicable Law. To be a User(s) and be eligible to use our Services, an individual must be at least 18 (eighteen) years of age. MyFastX advises its users that while accessing the website, they must follow/abide by the related laws. MyFastX is not responsible for the possible consequences caused by your behavior/acts during use of the website. MyFastX may, in its sole discretion, refuse the service to anyone at any time.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">USER(S) AGREEMENT</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">This agreement applies to user(s) if user(s) are visitors, registered - free or paid user(s) who access the website for any purpose. It also applies to any legal entity which may be represented by you under actual or apparent authority. User(s) may use this site solely for their own personal or internal purposes.<br/>
                        This agreement applies to all MyFastX Services, collectively with any additional terms and conditions that may be applicable to the specific service used/accessed by user(s). In the event of a conflict or inconsistency between any provision of the terms and conditions mentioned herein with those of the particular service, the provisions of the terms and conditions applicable to such specific Services shall prevail.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">AMENDMENT TO USER(S) AGREEMENT</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">MyFastX may change, modify, amend, or update this agreement from time to time with or without any prior notification to user(s) and the amended and restated terms and conditions of use shall be effective immediately on posting. If you do not adhere to the changes, you must stop using the service. Your continuous use of the Services will signify your acceptance of the changed terms and deemed acceptance of the amended Agreement. Further, User(s) shall also be bound by any amendment made in any policy or agreement from time to time, referred to in these Terms of Service.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">INTELLECTUAL PROPERTY RIGHTS</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">MyFastX is the sole owner or lawful licensee of all the rights to the website and its content. Website content means its design, layout, text, images, graphics, sound, video etc. The website content embodies trade secrets and intellectual property rights protected under worldwide copyright and other laws. All title, ownership and intellectual property rights in the website and its content shall remain with MyFastX, its affiliates or licensor of MyFastX content, as the case may be.<br/>
                    All rights, not otherwise claimed under this agreement or by MyFastX.in, are hereby reserved. The information contained in this web site is intended, solely to provide general information for the personal use of the reader, who accepts full responsibility for its use. MyFastX does not represent or endorse the accuracy or reliability of any information, or advertisements (collectively, the "content") contained on, distributed through, or linked, downloaded or accessed from any of the Services contained on this website, or the quality of any products, information or other materials displayed, or obtained by you as a result of an advertisement or any other information or offer in or in connection with the Service. We accept no responsibility for any errors or omissions or for the results obtained from the use of this information. All information in this website is provided "AS IS " with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose. Nothing herein shall to any extent substitute for the independent investigations and the sound technical and business judgment of the user(s). In no event shall MyFastX be liable for any direct, indirect, incidental, punitive, or consequential damages of any kind whatsoever with respect to the Service. User(s) of this site must hereby acknowledge that any reliance upon any content shall be at their sole risk.<br/>
                    MyFastX reserves the right, in its sole discretion and without any obligation, to make improvements to, or correct any error or omissions in any portion of the Service or the app/website. Trademark<br/>
                    All related icons and logos are registered trademarks or trademarks or service marks of MyFastX in various jurisdictions and are protected under applicable copyright, trademark and other proprietary rights laws. The unauthorized copying, modification, use or publication of these marks is strictly prohibited. Copyright<br/>
                    All content on this website is the copyright of MyFastX except the third-party content and link to third-party websites on our app/website.
                    Systematic retrieval of MyFastX content to create or compile, directly or indirectly, a collection, compilation, database or directory (whether through robots, spiders, automatic devices or manual processes) without written permission from MyFastX is prohibited.<br/>
                    In addition, use of the content for any purpose not expressly permitted in this Agreement is prohibited and may invite legal action. As a condition of your access to and use of MyFastX's Services, you agree that you will not use the website service to infringe the intellectual property rights of MyFastX or any other third party in any way .MyFastX reserves the right to terminate the account of a user(s) upon any infringement of the rights of any third party in conjunction with use of the MyFastX service, or if MyFastX believes that user(s) conduct is harmful to the interests of MyFastX, its affiliates, or other users, or for any other reason in MyFastX's sole discretion, with or without cause. You shall be liable to indemnify MyFastX for any losses or expenses incurred by MyFastX due to any infringement of intellectual property rights owned by MyFastX without prejudicing MyFastX's right to bring any legal action against you.
                    </p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">LINKS TO THIRD PARTY SITES</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Links to third-party sites are provided by web site as a convenience to user(s) and MyFastX has no control over such sites i.e. content and resources provided by them.<br/>
                    MyFastX may allow user(s) access to content, products or Services offered by third parties through hyperlinks (in the form of word links, banners, channels or otherwise) to such Third Party's website. You are cautioned to read such sites' terms and conditions and/or privacy policies before using such sites in order to be aware of the terms and conditions of your use of such sites. MyFastX believes that user(s) acknowledge that MyFastX has no control over such third party's site, does not monitor such sites, and MyFastX shall not be responsible or liable to anyone for such third-party site, or any content, products or Services made available on such a site. User(s) shall review MyFastX's Privacy Policy and abide by MyFastX's Privacy Policy at the time of the User(s) interaction with MyFastX, with respect to and concerning any information and data.
                    </p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">TERMINATION</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Most content and some of the features on the web site are made available to visitors free of charge. However, MyFastX reserves the right to terminate access to certain areas or features of the website at any time for any reason, with or without notice. MyFastX also reserves the universal right to deny access to particular users to any/all of its Services without any prior notice/explanation in order to protect the interests of MyFastX and/or other visitors to the website. MyFastX reserves the right to limit, deny or create different access to the website and its features with respect to different user(s), or to change any of the features or introduce new features without prior notice.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">TERMS & CONDITIONS FOR USE OF OUR SERVICE</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">The following Terms & Conditions shall apply to customers utilizing the Services offered by the Company for the hiring of vehicles: The customer shall pay the fare (as agreed), parking charges, additional night surcharge (where applicable) and any fee or levy presently payable or hereinafter imposed by the Applicable Law or required to be paid for availing the Services of MyFastX. The customer agrees and accepts that the use of the Services provided by the Company is at the sole risk of the Customer, and further acknowledges that the Company disclaims all representations and warranties of any kind, whether express or implied. The customer shall ensure that he/she will not indulge in any of the following activities while availing the service:</p>
                    <ul className="list-disc pl-6">
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Soiling or damaging the body and/or any other interiors of the vehicles.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Misusing, soiling or damaging any of the devices (technical/non-technical) in the vehicle.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Asking the driver to break any Traffic/RTO/City Police and/or government rules for any purpose. The driver has the right to refuse such a request by the customer. The driver also has the right to refuse such a pick-up.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Pressurizing the driver to overload truck with the consignment than the allowed limit.</li>
                    </ul>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">The Customer shall indemnify the Company from and against and in respect of any or all liabilities, losses, charges and expenses (including legal fees and costs on a full indemnity basis) claims, demands, actions and proceedings which the Company may incur or sustain directly or indirectly from or by any reason of or in relation to the use or proposed use of the Services by the Customer and shall pay such sums on demand on the Company.
                        The Company is hereby authorized to use the location-based information provided by any of the telecommunication companies when the Customer uses the mobile phone to make a vehicle booking. The location-based information will be used only to facilitate and improve the probability of locating a mini-truck for the Customer.<br/>
                        The Company shall be entitled to disclose to all companies within its group, or any government body as so required by the Applicable Law or by directive or request from any government body, the particulars of the Customer in the possession of the Company in any way as Company, in its absolute discretion, deems fit or if it considers it in its interests to do so.<br/>
                        The Company shall be entitled at any time without giving any reason to terminate the booking of the vehicle done by the Customer. User(s) shall indemnify MyFastX with respect to any expenses incurred with respect to such booking.<br/>
                        In case of lost items during the transit, the Company will try to locate the items on a "best-effort" basis but is not responsible for the same in case of loss or damage or theft or misappropriation to / of the same. MyFastX aggregates the vehicles for the purposes of providing Services. In the event of loss of any item, User(s) shall not have any right to withhold the payment to be made to MyFastX. Further, in the event any payments from the User to MyFastX are pending for the period prescribed by MyFastX in its respective invoice/statement, MyFastX reserves the right, in accordance with the Applicable Law, to exercise particular lien over the consignment till full payment is made to MyFastX for the Services. Additionally, User(s) will be liable to indemnify MyFastX against any loss, damage or expenses incurred by it due to the custody of the consignment during this period.<br/>
                        Any complaint in respect of the Services or the use of the vehicles, the Customer has to inform the Company of the same in writing within 24 hours of using the vehicles or Services of the Company.<br/>
                        The Company shall not be liable for any conduct of the drivers of the vehicles. However, the Company encourages you to notify it, of any complaints that you may have against the driver that you may have hired using the Company's Services.<br/>
                        The Company shall be entitled to add to, vary or amend any or all these terms and conditions at any time and the Customer shall be bound by such addition, variation or amendment once such addition, variation or amendment are incorporated into these terms and conditions at Company's website MyFastX.com on the date that Company may indicate that such addition, variation or amendment is to come into effect.<br/>
                        All the calls made to the Company's call center are recorded by the Company for quality and training purposes. In the event you place a query on our app/website including any query with respect to our Services, applicable fees or Terms of Service, you hereby expressly agree to consent to receive our responses, whether by way of telephonic calls or electronic mail, to such query and all related information with respect to our Services. For removal of doubts, related information shall include without limitation any marketing and/or commercial information. You understand, agree and acknowledge that such information shall in no event, qualify as unsolicited commercial communication under the Telecom Unsolicited Commercial Communications Regulations, 2007 and/or due to disclosure of such information, our telephone numbers shall not qualify to be registered under the 'National Do Not Call Register' or the 'Private Do Not Call Register' in accordance with the Telecom Unsolicited Commercial Communications Regulations, 2007 or any other Applicable Law.<br/>
                        Cancellation Policy: All cancellations made 5 minutes after driver allocation will incur a cancellation fee of INR. 50/- (Indian Rupees Fifty only). Cancelling four bookings in a day after driver allocation will temporarily suspend your account for 24 hours. Figures are subject to change.
                        Toll Charges: In case of a toll on your trip, return toll fare will be charged.
                    </p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">LABOUR SERVICES</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">MyFastX provides the option to Customers to utilize Labour Services by clicking on the “Include Labour” toggle on the review screen of the website/App.<br/>
                    “Labour Services” means that the service provided by the labour wherein labour undertakes the task of loading/unloading the consignment of goods from the loading/unloading point to the vehicle or vice-versa, as the case may be.<br/>
                    “Labour” means the driver of the vehicle and the person accompanying him in the vehicle.<br/>
                    By clicking on the “Include Labour” toggle on the review screen of the Website/App or by availing the Labour Services, the Customer agrees to the following terms and conditions. These terms shall be applicable in addition to the terms and conditions applicable to the customers for hiring of vehicles:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You acknowledge that the Labour Service is provided only for ground floor to ground floor loading/unloading. You acknowledge that the ground floor movement (distance between the transport vehicle and the loading/unloading point) shall not exceed 25 meters.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You acknowledge that the extra charges (as visible in the Invoice) for the Labour Service shall be payable by you.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You agree that you shall be present in person at the time of loading/unloading of Consignment. If you are not available, an authorized representative must be present</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You agree that MyFastX shall not be liable for misbehavior of the labour during the loading/unloading. However, you are requested to bring to the notice of Company such incidents. The Company, in its sole discretion, may take action in such matters.</li>
                    </ul>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">CONFIDENTIALITY</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">User(s) shall not disclose any information received under the contract of service with MyFastX to any third party. Access to any information which pertains to the business of MyFastX shall be kept confidential to the extent it might adversely impact MyFastX's business. User(s) shall be liable to indemnifies against any loss of business or reputation due to the act of the user(s).</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">DISCLAIMER</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">All vehicles registered with the Company are continuously tracked using mobile technology for security reasons only. It is hereby made expressly clear to you that the Company does not own any vehicle nor it directly or indirectly employ any driver for the vehicles or Labour for loading/unloading of Consignment. Vehicles, drivers and Labour are all supplied by third parties and the Company disclaims any and all liability(ies) in respect of the Labour, drivers and the vehicles alike.<br/>
                    The Company have right to use the customer contact information for its own marketing purposes. The Company may send regular SMS updates to the mobile numbers registered with it.
                    </p>
                </div>
                <div className="w-full pb-5 md:pb-12">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">ACE PLUS TERMS AND CONDITIONS</h1>
                    <ul className="list-disc pl-6">
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Only ground floor to ground floor loading/unloading is allowed</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Distance between MyFastX truck and loading/unloading point should not be more than 25 feet (8 meters).</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Max weight per box allowed is 25 kg and up to 30 such boxes/cartons are allowed.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Labour charge will be automatically added to the invoice.</li>
                    </ul>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">INSURANCE INFO</h1>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg text-[#000000cc]">Working on it</h1>
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">COURIER INFO</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Please find Courier related terms and conditions <NavLink to='https://drive.google.com/file/d/1o7KuYJVaAOxszNO2-U3LhudOjV1uX-w4/view' className="text-blue-600 underline">here</NavLink></p>
                </div>
                <div className="w-full pb-5 md:pb-8"> 
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">MyFastX WALLET INFO</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Yet to work on it</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">YOUR ACCEPTANCE OF OUR TERMS AND CONDITIONS</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">By giving us your consignment, you accept our terms and conditions set out in the consignment note and/or the contract of carriage and/or the contract for the performance of other services on behalf of yourself and/or anyone else who has an interest in the consignment or the performance of other Services irrespective of whether you have signed the front of our consignment note or not. Our terms and conditions also cover and can be invoked by anyone we use or sub-contract to collect, transport, deliver your consignment or perform other Services as well as our employees, directors and agents. Only one of our authorized officers may agree to a variation of these terms and conditions in writing. When you give us the consignment with oral or written instructions that conflict with our terms and conditions we shall not be bound by such instructions.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg text-[#000000cc]">YOUR OBLIGATIONS</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">By giving us your consignment, you accept our terms and conditions set out in the consignment note and/or the contract of carriage and/or the contract for the performance of other services on behalf of yourself and/or anyone else who has an interest in the consignment or the performance of other Services irrespective of whether you have signed the front of our consignment note or not. Our terms and conditions also cover and can be invoked by anyone we use or sub-contract to collect, transport, deliver your consignment or perform other Services as well as our employees, directors and agents. Only one of our authorized officers may agree to a variation of these terms and conditions in writing. When you give us the consignment with oral or written instructions that conflict with our terms and conditions we shall not be bound by such instructions.</p>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">YOUR OBLIGATIONS</h1>
                    <ul className="list-disc pl-6">
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You warrant, undertake and guarantee to us:</li>
                        <ul className='list-[circle] pl-8 md:pl-12'>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>The contents of the consignment (including but not limited to weight and number of items) have been properly described on our consignment note and that the Consignment Note is complete in all respects and the documents as required for the transporting the consignment including invoice, permits are enclosed with the Consignment Note.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>That the contents of the Consignment are not Prohibited Items and/or are not restricted by the applicable regulations and that you will supply to us any Dangerous Goods declaration that is needed, properly and accurately in accordance with Applicable Law and neither you nor the consignee is a person or organization with whom we or you may not legally trade under Applicable Law.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>That all statements and information and documents provided by you relating to the Consignment will be true and correct and you acknowledge that in the event that you make untrue or fraudulent statement about the Consignment or any of its contents, you would risk a civil claim and/or criminal prosecution the penalties for which may include forfeiture and sale. You agree to indemnify us and hold us harmless from any claims that may be brought against us or our agents arising from the information provided by you.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>We are authorized to deliver the goods at the address mentioned on the Consignment Note and without prejudice to the foregoing it is expressly agreed that we shall be conclusively presumed to have delivered the goods in accordance with this contract. We will be sending the delivery confirmation by SMS/e-mails, no-response within 24 hours would be considered as an affirmative to the delivery.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>You have declared the correct weight of the consignment and you will provide any special equipment we may need to load or unload the consignment on or off our vehicles.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>When you have asked us to charge the receiver or a third party and the receiver or third party does not pay us you will promptly settle our invoice together with an administration fee in full within 7 days of us sending you the invoice</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Applicable Law has been complied with by you.</li>
                        </ul>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You understand, agree and acknowledge that the Services are not suitable for transportation of valuables like cash, gold, silver, diamond, precious stones, jewels or jewellery, expensive luxury items etc. (“Valuables”). If you handover / load the vehicles with Valuables for transportation, any loss / damage / theft / misappropriation to / of the consignment shall be at your risk and not ours, for the reasons mentioned earlier and without prejudice, we shall not only have the right to explicitly and specifically disclaim
                                any liability and/or responsibility arising/accruing from the damage / loss / theft / misappropriation to/of the consignment
                                or any contents of the consignment, but also the right to claim indemnification from you where we have suffered loss of reputation / goodwill due to your actions of breaching our terms of service.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You understand, agree and acknowledge that if the consignment or any contents thereof are of the value exceeding INR 25,000/- (Indian Rupees Twenty-Five Thousand only), you shall get the consignment insured from a General Insurance company operating in India before handing over the consignment for transportation. In absence of adequate insurance to cover loss of goods in transit or in absence of wrong or non-declaration of the consignment details / value, and whether insured or not, the transportation of the consignment shall be entirely at your risk and not ours and we explicitly and specifically disclaim any liability and/or responsibility arising/accruing from the damage / loss / theft / misappropriation or any insurable loss to / of the consignment or any contents of the consignment and you further agree to indemnify us in all those cases where we have suffered loss of reputation / goodwill due to your actions of breaching our terms of service.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You agree to indemnify us and hold us harmless from any liabilities we may suffer or any costs, damages or expenses, including legal costs, we incur either to you or to anyone else arising out of you being in breach of any of these warranties, representations and guarantees, even if we inadvertently accept a consignment that contravenes any of your obligations.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You certify that all statements and information you provide relating to the transportation of the consignment will be true and correct. You acknowledge that in the event that you make untrue or fraudulent statements about the consignment or any of its contents you risk a civil claim and/or criminal prosecution the penalties for which include forfeiture and sale of your consignment. To the extent that we may voluntarily assist you in completing the required customs and other formalities such assistance will be rendered at your sole risk. You agree to indemnify us and hold us harmless from any claims that may be brought against us arising from the information you provide to us and any costs we will incur regarding this, and pay any administration fee we may charge you for providing the Services described in this condition.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">The customer agrees and acknowledges that the use of the Services offered by Company is at the sole risk of the customer and that Company disclaims all representations and warranties of any kind, whether express or implied as to condition, suitability, quality, merchantability and fitness for any purposes are excluded to the fullest extent permitted by Applicable Law. Without prejudice to the above, the Company makes no representation or warranties with respect to:</li>
                        <ul className='list-[circle] pl-8 md:pl-12'>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>The Services meeting the customer's requirements.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>The Services will be uninterrupted, timely, secure, or error-free.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Any responsibility or liability for any loss or damage, howsoever caused or suffered by the Customer arising out of the use of Services offered by Company or due to the failure of Company to provide Services to the Customer for any reason whatsoever including but not limited to the Customer's non-compliance with the Services' recorded voice instructions, malfunction, partial or total failure of any network terminal, data processing system, computer tele-transmission or telecommunications system or other circumstances whether or not beyond the control of Company or any person or any organization involved in the above mentioned systems.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Any liability for any damages of any kind arising from the use of the Service offered by the Company, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Any additional or extra charges for far off locations & toll charges as well.</li>
                        </ul>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Applicable Law has been complied with by you.</li>
                        <ul className='list-[circle] pl-8 md:pl-12'>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Circumstances beyond our control such as (but not limited to):</li>
                            <ul className='list-[square] pl-8 md:pl-12'>
                                <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Acts of God including earthquakes, cyclones, storms, flooding, fire, disease, fog, snow or frost or other natural calamities or disasters</li>
                                <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Force majeure including (but not limited to) war, epidemics, pandemics, accidents, acts of public enemies, strikes, embargoes, perils of the air, local disputes or civil commotions.</li>
                                <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>National or local disruptions in air or ground transportation networks and mechanical problems to modes of transport or machinery.</li>
                                <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Latent defects or inherent vice in the contents of the consignment.</li>
                                <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Criminal acts of third parties such as theft and arson.</li>
                            </ul>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Your acts or omissions or those of third parties such as:</li>
                            <ul className='list-[square] pl-8 md:pl-12'>
                                <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>You being in breach of (or any other party claiming an interest in the consignment causing you to breach) your obligations under these terms and conditions.</li>
                            </ul>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>You being in breach of (or any other party claiming an interest in the consignment causing you to breach) your obligations under these terms and conditions.</li>
                        </ul>
                    </ul>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">DANGEROUS GOODS / SECURITY</h1>
                    <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Dangerous Goods</li>
                        <ul className='list-[circle] pl-8 md:pl-12'>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>We do not carry, nor perform other Services regarding, goods which are in our sole opinion Dangerous Goods including, but not limited to, those specified in the regulations, guidelines, technical instructions, codes applicable to us and our business or to the transport of, or the performance of other Services regarding, Dangerous Goods.</li>
                            <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>We may at our discretion accept some Dangerous Goods for carriage, or for the performance of other Services, in some locations if you have been accorded the status of an approved customer and this must be given by us in writing before your consignment can be accepted. Your Dangerous Goods will only be accepted if they comply with the applicable regulations and our requirements. Details of our requirements together with the procedure for applying for approved customer status are available from our nearest office and a dangerous goods surcharge will be invoiced to you upon acceptance of your consignment.</li>
                        </ul>
                    <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>Prohibited Items: We do not accept consignments that contain prohibited items.</li>   
                    <li className='font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium'>We accept consignments only upon your declaration of the type and value of the consignment (“said to contain” basis). We have no responsibility whatsoever as to the correctness of description, type or value thereof and you agree to indemnify us and hold us harmless from any claims that may be brought against us arising out of or relating to such declaration provided by you and any costs we will incur relating thereto.</li>   
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">REJECTED CONSIGNMENTS</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">If the receiver refuses to accept delivery, we will try to contact you and agree to the next action if it is appropriate. You agree to pay us any costs we incur in forwarding, disposing of or returning the consignment and our charges (if any) for the agreed appropriate next action. If user(s) terminates the agreement with MyFastX with respect to any consignment, user(s) shall be liable to pay MyFastX the entire fees and other expenses so incurred with respect to such consignment.</p>  
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">CLAIMS BROUGHT BY THIRD PARTIES</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">You undertake to us that you shall not permit any other person who has an interest in the consignment to bring a claim or action against us arising out of Carriage even though we may have been negligent or in default and if a claim or action is made you will indemnify us against the consequences of the claim or action and the costs and expenses, we incur in defending it.<br/>
                    The above-mentioned terms and conditions of use and/or Agreement and the Privacy Policy constitute the entire agreement between the User(s) and MyFastX with respect to access to and use of the web site and the Services offered by MyFastX, superseding any prior written or oral agreements in relation to the same subject matter herein.
                    </p>  
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">MyFastX REFERRAL PROGRAM</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Please find all referral-related terms and conditions [here](https://MyFastX.in/referral-tnc)</p>  
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">CASHBACK SCHEMES</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Please find all cashback-related terms and condition</p>  
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">ASSURED BOOKING TERMS</h1>
                    <ul className="list-disc pl-6">
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Only the users who have received the communication are eligible under this scheme.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">This scheme is eligible for Tata Ace open category bookings between 10:30-19:00 Hours only.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Each user will only be eligible once a day for this scheme i.e., a user will be eligible for a maximum of Rs 50/- (Rupees Fifty only) cashback in a day in case of unfulfilled booking.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">The cashback will be auto-credited in the user's account within 24 hours of an unfulfilled booking.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Management decisions will be considered final with regard to all aspects of the scheme.</li>
                    </ul>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">GST</h1>
                    <ul className="list-disc pl-6">
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">GST, as applicable, will be levied on the Invoice.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Any information shall be considered only prospectively. Under no circumstances, will invoices be revised retrospectively for delay in providing GST registration information.</li>
                        <li className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">Taxes on the reverse charge mechanism, wherever applicable, shall have to be paid by the recipient of services.</li>
                    </ul>
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">GOVERNING LAW AND JURISDICTION</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to the principles of conflict of laws. The courts of [Delhi] shall have exclusive jurisdiction over any disputes, differences or claims arising out of or in connection with these Terms of Service or any Services provided by us pursuant to these Terms of Service</p>  
                </div>
                <div className="w-full pb-5 md:pb-8">
                    <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">GRIEVANCE OFFICER</h1>
                    <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">In accordance with the Consumer Protection (E-Commerce) Rules, 2020, the name and contact details of the Nodal/Grievance Officer are provided, any grievances under the said Rules may have relevance with respect to the said Rules, its treatment or any grievance related to Services being availed at MyFastX, the request may be directed by the Authority under the said Rules, to such grievance officer or at the below-mentioned coordinate:</p>               
                </div>
                <div className="w-full pb-5 md:pb-8">
                <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">
                Mr. Vikash Kumar Mishra<br/>
                Designation: Grievance Officer and Chief Customer Officer.<br/>
                MyFastX Head Office,<br/>
                Contact us:<br/>
                Email: grievance.officer@myfastx.com<br/>
                Phone:<br/>
                Time: Monday to Friday (10 a.m. to 6 p.m.)<br/>
                </p>
                <h1 className="font-inter text-[15px] md:text-lg font-semibold text-[#000000cc]">DISCLAIMER</h1>
                <p className="font-inter text-[13px] md:text-[15px] text-[#2d2c2cd8] font-medium">The information contained in this website and MyFastX App is for general information purposes only. The information is provided by MyFastX and while we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website / App or the information, products, services, or related graphics contained on the website / App for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                    In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website / App.
                    Through this website / App, you are able to link to other websites which are not under the control of MyFastX. We have no control over the nature, content and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.<br/>
                    Every effort is made to keep the portal up and running smoothly. However, MyFastX takes no responsibility for, and will not be liable for, the portal being temporarily unavailable due to technical issues beyond our control.
                    </p>
            </div>
            </div>
        </div>
    )
}

export default Terms;

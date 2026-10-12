const C = '//iprorwxhliijlm5q.leadongcdn.com/cloud/'
export const img = (p) => C + p

export const LOGO = img('mpBqlKoiRlpSiqnnijoq/7.png')
export const LOGO_WHITE = img('mrBqlKoiRlpSpjnqkpom/logo2.png')

export const banners = [
  'oqBplKoiRllSqqonqrpnk/yingwen1.png',
  'onBplKoiRllSrmnqppppl/banner.jpg',
  'ojBplKoiRljSmjljnilnj/3e89c665-f49b-47e3-9660-e4295b3280b7.jpg',
  'olBplKoiRljSmjljrrlki/41b620e7-558a-4d94-ae87-04bbe986f8b4.jpg',
  'lrBqlKoiRlmSrmpprjop/banner1.jpg',
].map(img)

export const categories = ['Off Road Accessories', 'Trailer Parts', 'Rigging Hardware', 'Marine Hardware', 'OEM/ODM']

export const popular = [
  ['Aluminum Alloy Adjustable Drop Hitch', 'opBplKoiRllSqikknmllj/kediaojietuochebei6-320-320.jpg'],
  ['Tri-Ball Trailer Hitch Mount with 360° Swivel Tow Shackle', 'omBplKoiRllSqiirorlpi/zhutu8-320-320.jpg'],
  ['Alloy Steel Sleeve Style Lock Specially', 'okBplKoiRllSqinllrloj/Trailer-Coupler-Lock-320-320.jpg'],
  ['Pintle Hook with Hitch Ball', 'ooBplKoiRllSqimionlij/hutougouB-320-320.jpg'],
  ['Off Road 4×4 Extreme Complete Recovery Kit', 'okBplKoiRllSmipplkllk/Kinetic-Recovery-Tow-Rope0-320-320.png'],
  ['Forged 10T/12T Snatch Block', 'opBplKoiRljSmkqqmklok/forging-snatch-block-320-320.jpg'],
  ["Shackle Hitch Receiver 2'' Tow Hitch Slider", 'oqBplKoiRllSmikjqqljj/zhutu2-320-320.jpg'],
  ['Heavy Duty Recovery Boards with Replaceable Metal Studs', 'oiBplKoiRllSpiorkkllj/sharp-tip4-320-320.jpg'],
].map(([name, p]) => ({ name, image: img(p), category: 'Trailer Parts' }))

export const productCats = [
  ['Shackle', 'opBplKoiRllSojjrlilqi/xiekou-640-640.png'],
  ['Snatch Block', 'ojBplKoiRllSojjroilmj/hualun-640-640.png'],
  ['Adjustable Hitch Ball Mount', 'olBplKoiRllSojjrqilri/kediaojietuochebei-640-640.png'],
  ['Traction Board', 'omBplKoiRllSojjrqilni/tuokunban-640-640.png'],
  ['Kinetic Rope', 'oqBplKoiRllSojjrqilki/tuochesheng-640-640.png'],
  ['Tralier Hitch Mount', 'opBplKoiRllSojjrqilli/tuochezhuangzhi-640-640.png'],
  ['Soft Shackle', 'onBplKoiRllSojjrqilii/ruanxiekou-640-640.png'],
  ['Tow Starp', 'ooBplKoiRllSojjrqilji/tuochedai-640-640.png'],
].map(([name, p]) => ({ name, image: img(p) }))

const raw = {
  'Off Road Accessories': [
    ['4x4 Off Road Black Painted Forged D Ring Shackle', 'oiBplKoiRljSoklojmlqk/d-ring-bow-shackle.jpg'],
    ['Full Braided Sleeve Soft Shackle', 'oqBplKoiRliSknmpjplmk/weibiaoti.jpg'],
    ['Heavy Duty Off-road Recovery Kinetic Rope', 'onBplKoiRllSoimqlqlnk/zhutu2.jpg'],
    ['2026 New Design Forging Snatch Block', 'ojBplKoiRllSojqjpilrj/1.png'],
    ['Heavy Duty Farm Jack High Lift Jack for 4x4 Off Road Vehicle Recovery', 'ooBplKoiRllSpiqriolqj/H31322caf6b7146778fcd841fd44ba5158-jpg_720x720q50.jpg'],
    ['Heavy Duty Forged Split Shackle for 4x4 Vehicle Recovery', 'ojBplKoiRllSojpjpilmk/1.png'],
    ['2 Inch Aluminum Steel Forging Shackle Hitch Reciever', 'opBplKoiRljSmkjjkklji/aluminum-hitch-receiver.jpg'],
    ['4x4 Off-Road Tow Recovery Kit', 'olBplKoiRljSmkpqoolik/2771.jpg'],
    ['8T Forged Universal Winch Snatch Block', 'oiBplKoiRljSmkqqmklml/forging-snatch-block.jpg'],
    ['Heavy Duty Off Road Winch Accessory Kit', 'okBplKoiRljSmkpqnolik/4X4-RECOVERY-KIT.png'],
  ],
  'Trailer Parts': [
    ['Pair of 1000 LB Trailer Stabilizer Adjustable Telescoping Swing Down Jack', 'okBplKoiRllSpijipqlrj/20250530_181135_160.jpg'],
    ['8000Lbs 15" Lift Trailer Jack Heavy-Duty Square Welded-on Trailer Tongue Jack', 'oiBplKoiRllSpijiqolrj/20250530_180117_116.jpg'],
    ['70148 10" Lift Swing Back Trailer Jack with Single Wheel', 'oqBplKoiRllSpijikqlmj/20250530_180714_145.jpg'],
    ['Adjustable Eye Assembly', 'okBplKoiRllSqijlqrloj/zhutu1.jpg'],
    ['Hand Winch with Polyester Strap and Hook', 'olBplKoiRllSqirjnilji/shoudongjiaopan5.jpg'],
    ['Hitch Step Anti Slip', 'oqBplKoiRllSqiijrqlki/zhutu1.jpg'],
  ],
  'Rigging Hardware': [
    ['G70 Chain Assemblies With Grab Hook And Clevis Pear Link', 'mnBqlKoiRlpSjmqrpjop/2368-fuben.jpg'],
    ['Australian Medium Link Chain', 'mrBqlKoiRlpSipnjmpom/huaban.jpg'],
    ['Grade 70 Triangle Ring Chain Sling with Eye Grab Hook', 'mpBqlKoiRlpSjmorkioq/2391.jpg'],
    ['Grade 70 Transport Chain With Grab Hooks', 'orBplKoiRliSknikqmlmk/transport-chain.jpg'],
    ['G80 Black Oiled Alloy Steel Lifting Chain', 'omBplKoiRliSonrmoollj/Link-Chains-with-High-Strength.jpg'],
    ['US NACM G70 Transport Trailer Safety Chain', 'mjBqlKoiRlmSrokmorop/HTB1ZFjkXwfHK1Jjy1zbq6yhRFXal.jpg'],
  ],
  'Marine Hardware': [
    ['Outdoor Folding Ring Spiral Ground Anchor', 'mqBqlKoiRlmSqniklmop/1.jpg'],
    ['4" 6" 8" Nylon Boat Kayak Cleat', 'ojBplKoiRllSpiqrjqlij/nylon-cleat.jpg'],
    ['Yacht Boat 304/316 Stainless Steel Bruce Anchor', 'mrBqlKoiRlpSpqqoilom/QQtupian20170911154144.jpg'],
    ['Portable Galvanized Carbon Steel Danforth Anchor for Boat', 'mkBqlKoiRlpSipjrnroq/ddd3.jpg'],
    ['High Quality Galvanized Steel Type C Folding Anchor', 'mqBqlKoiRlpSrppmmoom/1.jpg'],
  ],
  'OEM/ODM': [
    ['Precision Forging Steel Trailer Towing Eyes', 'opBplKoiRliSrrpnjplji/forged-long-shank-rod-rings.jpg'],
    ['Precision Forging Carbon Steel Jaw', 'omBplKoiRliSrrpnnqlii/forging-machined-parts.jpg'],
    ['Forging CNC Machining Trailer Spindle Trailer Axie Parts', 'opBplKoiRliSrrpnmolqj/trailer-axle-accessory.jpg'],
    ['ISO Certified OEM Die Forging Manufacturer', 'omBplKoiRliSrrpnnmlmj/jixieduanzaopeijian-mechanical-forging-accessories.png'],
    ['OEM Forging Plate Forging Parts', 'olBplKoiRliSrrpnopllj/forgging-factory.jpg'],
    ['Customized Light Carbon Steel Forging Race Horseshoe', 'mrBqlKoiRlmSnnjmqlom/Custom-made-horseshoes.jpg'],
  ],
}
export const products = Object.entries(raw).flatMap(([category, list]) =>
  list.map(([name, p]) => ({ name, image: img(p), category })))

export const stats = [
  ['19', '', '19 years of industry experience'],
  ['5000', '+', 'Serve 5000+ customers'],
  ['80', '', 'Design&invention patents'],
  ['60', '', 'More than 60 new products per year'],
  ['30', '%', 'Annual market growth rate above 30%'],
  ['24', '', '24 hours online service'],
]

export const quality = [
  ['Professional Production', 'The professional workers and advanced facility can make the quality more refined with high productivity,the Bulk production can save single piece cost.', 'opBplKoiRljSmjknoolkj/Tensile-Test.png'],
  ['Quality Control Process', 'We will never stop to pursue the better quality with Scientific management methods to meet customers quality requirements.', 'onBplKoiRljSmjknloljj/Data-Recording.png'],
  ['Professional Service', 'We pay high attention to customers feedback.We will do the best to give satisfied solution within 24-48 hours if have quality problem.', 'olBplKoiRljSikooqiloj/222.jpg'],
  ['Delivery On Time', 'For regular parts,we always have stock and for customized parts,from make mold to bulk production,normally 30-40 days.', 'omBplKoiRljSikooqilii/111.jpg'],
].map(([title, text, p]) => ({ title, text, image: img(p) }))

export const reviews = [
  ['Yahya', 'onBplKoiRljSjkmmjilnj/Yahya-200-200.png', 'The service is so nice, price is also good, the product itself came in the right time and quality is good.'],
  ['Gygnus', 'omBplKoiRljSjkpmkqlkj/Gygnus-200-200.png', 'Helpful, professional, good quality! Will purchase again.'],
  ['Venus', 'oiBplKoiRljSjkpmrqlpk/Venus-200-200.png', 'Thinkwell very professional, and the products looks good. We sales very well in our market. Will reback soon!'],
  ['Zane', 'opBplKoiRljSjkpmkmlrj/Zane-200-200.png', 'QUALITY GREAT! I had a easy time communicating with David. Originally I was given a long production and shipping time; I asked them to help me and he cut the time in 1/2 for me. They provided professional listing pictures and went above and beyond to help me.'],
  ['Anthony', 'onBplKoiRljSjkpmjolij/Anthony-200-200.png', 'Excellent company to trade with, product exceeded expectations and delivery time was exceptional. We are satisfied with Thinkwell quality and service.'],
  ['Danika', 'okBplKoiRljSjkmmjklij/Danika-200-200.png', 'The service is so nice, price is also good, the product itself came in the right time and quality is good.'],
].map(([name, p, text]) => ({ name, avatar: img(p), text }))

export const news = [
  ['Invitation Letter for The 140th Canton Fair of ThinkWell', 'September 21, 2026', 'opBplKoiRllSomoillppk/wenzhangsuolvetu-yingwen.png', 'Sincerely invite you to visit our company, Qingdao Thinkwell Hardware & Machinery Co., Ltd., at the 140th China Import and Export Fair (Canton Fair). We will showcase our latest products during the exhibition and look forward to face-to-face communication.'],
  ['AFM Disabler: Bringing The V8 Engine Back To Its Purest Form', 'August 12, 2026', 'oqBplKoiRllSmpklnopjk/wenzhangsuolvetu.png', 'If you own a V8 from General Motors or Chrysler, you may have seen "V4 mode" activate at highway speed as the engine shuts down half its cylinders to save fuel.'],
  ['Dual-ball Adjustable Hitch Mount: Combining Two Balls into One, The Flexible Tow', 'August 13, 2026', 'ojBplKoiRllSmponompmn/wenzhangsuolvetu.png', 'The dual-ball adjustable hitch mount integrates two commonly used ball sizes onto the same arm, making towing preparation more efficient and convenient.'],
].map(([title, date, p, excerpt]) => ({ title, date, image: img(p), excerpt }))

export const faqs = [
  ['How do you produce so many products? Such as the webbing, it is so far from your current production line?', 'Many customers want one-stop purchasing and we have attested suppliers nearby. After many cooperations, we make sure it helps customer price and quality, because as a long-term business our quantity is much bigger than an individual customer ordering from the supplier directly.'],
  ["What's benefit will you bring?", 'Your client satisfied on the quality.'],
  ['How about the delivery time?', 'The delivery time depends on the products and the quantity. Generally, the delivery time for a container is about one month.'],
  ["What's your quality guarantee?", 'We have different kinds of products which can meet different quality standards. Our QC department tests products before shipping. We have 100% quality guarantee to customers and will be responsible for any quality problem.'],
]

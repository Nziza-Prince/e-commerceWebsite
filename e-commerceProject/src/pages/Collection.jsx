import Man from '../assets/frontend_assets/p_img2_1.png'
import Person1 from '../assets/frontend_assets/p_img2.png'
import Person2 from '../assets/frontend_assets/p_img3.png'
import Person3 from '../assets/frontend_assets/p_img5.png'
import Person4 from '../assets/frontend_assets/p_img6.png'
import Person5 from '../assets/frontend_assets/p_img7.png'
import Person6 from '../assets/frontend_assets/p_img8.png'
import Person7 from '../assets/frontend_assets/p_img9.png'
import Person11 from '../assets/frontend_assets/p_img12.png'
import Person12 from '../assets/frontend_assets/p_img13.png'
import Person13 from '../assets/frontend_assets/p_img14.png'
import Person15 from '../assets/frontend_assets/p_img14.png'
import Person16 from '../assets/frontend_assets/p_img15.png'
import Person17 from '../assets/frontend_assets/p_img16.png'
import Person18 from '../assets/frontend_assets/p_img17.png'
import Person19 from '../assets/frontend_assets/p_img16.png'
import Person20 from '../assets/frontend_assets/p_img17.png'
import Person21 from '../assets/frontend_assets/p_img18.png'
import Person22 from '../assets/frontend_assets/p_img19.png'
import Person23 from '../assets/frontend_assets/p_img20.png'
import Person24 from '../assets/frontend_assets/p_img21.png'
import Person25 from '../assets/frontend_assets/p_img22.png'
import Person26 from '../assets/frontend_assets/p_img23.png'
import Person27 from '../assets/frontend_assets/p_img24.png'
import Person28 from '../assets/frontend_assets/p_img25.png'
import Person29 from '../assets/frontend_assets/p_img26.png'
import Person31 from '../assets/frontend_assets/p_img27.png'
import Person32 from '../assets/frontend_assets/p_img28.png'
import Person33 from '../assets/frontend_assets/p_img29.png'
const Collection = () => {
    const products = [
      { id: 1, name: "Women Round Neck Cotton Top", price: "$149", img: Man },
      { id: 2, name: "Women Round Neck Cotton Top", price: "$149", img: Person1 },
      { id: 3, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person2 },
      { id: 4, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person3 },
      { id: 5, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person4 },
      { id: 6, name: "Men Printed Plain Cotton Shirt", price: "$149", img: Person5 },
      { id: 7, name: "Women Round Neck Cotton Top", price: "$149", img: Person6},
      { id: 8, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person7 },
      { id: 5, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person4 },
      { id: 6, name: "Men Printed Plain Cotton Shirt", price: "$149", img: Person5 },
      { id: 7, name: "Women Round Neck Cotton Top", price: "$149", img: Person6},
      { id: 8, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person7 },
      { id: 5, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person4 },
      { id: 6, name: "Men Printed Plain Cotton Shirt", price: "$149", img: Person5 },
      { id: 7, name: "Women Round Neck Cotton Top", price: "$149", img: Person6},
      { id: 8, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person7 },
      { id: 9, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person11 },
      { id: 10, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person12 },
      { id: 11, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person13 },
      { id: 12, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person15 },
      { id: 13, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person16 },
      { id: 14, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person17 },
      { id: 15, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person18 },
      { id: 16, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person19 },
      { id: 17, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person20 },
      { id: 18, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person21 },
      { id: 19, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person22 },
      { id: 20, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person23 },
      { id: 21, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person24 },
      { id: 22, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person25 },
      { id: 13, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person26 },
      { id: 24, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person27 },
      { id: 25, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person28 },
      { id: 26, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person29 },
      { id: 27, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person31 },
      { id: 28, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person32 },
      { id: 29, name: "Men Round Neck Pure Cotton T-shirt", price: "$149", img: Person33 },

      ];
  return (
    <div className='flex'>
    <div className="sticky top-0 mx-20 flex flex-col justify-start gap-3 font-outfit mt-[89px]">
    <h1 className="">FILTER</h1>
    <div className="border w-72 py-4 px-5 mb-3">
      <h1 className="font-[Poppins] mb-2">CATEGORIES</h1>
      <div className="flex gap-3 mb-1">
        <input type="checkbox" className="w-4 h-6" />
        <label htmlFor="">Men</label>
      </div>
      <div className="flex gap-3 mb-1">
        <input type="checkbox" className="w-4 h-6" />
        <label htmlFor="">Women</label>
      </div>
      <div className="flex gap-3 mb-1">
        <input type="checkbox" className="w-4 h-6" />
        <label htmlFor="">Kids</label>
      </div>
    </div>
    <div className="border w-72 py-4 px-5 mb-3">
      <h1 className="font-[Poppins] mb-2">CATEGORIES</h1>
      <div className="flex gap-3 mb-1">
        <input type="checkbox" className="w-4 h-6" />
        <label htmlFor="">Men</label>
      </div>
      <div className="flex gap-3 mb-1">
        <input type="checkbox" className="w-4 h-6" />
        <label htmlFor="">Women</label>
      </div>
      <div className="flex gap-3 mb-1">
        <input type="checkbox" className="w-4 h-6" />
        <label htmlFor="">Kids</label>
      </div>
    </div>
  </div>
     
     <div className="my-16 font-[Roboto] ml-1 mr-32">
      {/* Latest Collections */}
      <section>
        <div className='flex justify-between'>
          <h2 className="text-left text-2xl text-gray-700 font-semibold mb-2">
            LATEST <span className="font-bold text-gray-900">All Collections</span> ---
          </h2>
          <select
  name=""
  id=""
  className="h-10 px-4 text-sm p-1 border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none mb-5"
>
  <option value="">Sort by: Price Low To High</option>
  <option value="">Price High To Low</option>
  <option value="">Newest</option>
</select>

        </div>
        <div className="grid grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col gap-1">
              <img
                src={product.img}
                alt={product.name}
                className="w-auto object-cover mb-2"
              />
              <p className="text-sm text-gray-800">{product.name}</p>
              <p className="text-sm ">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  )
}

export default Collection

/*
Concati Product Data
store_id: string
category_id: string
brand_name: string
name: string
description: string
is_active: boolean ( set to true )
properties: Object Array 
    property object {
        id: string
        name: string
        option: string Array
    }
variants: Object Array
    variant object {
        properties: property Array
            property object {
                id: string
                option: string
            }
        name: string
        description: string
        price: float string
        quantity: integer
        sku_code: string
        barcode: string
        images: Object Array
            image object {
                media_id: string
                order: integer
                is_main: boolean
            }
        metas: Objet Array
    }
images: Object Array
    image object {
        media_id: string
        order: integer
        is_main: boolean
    }
metas: Objet Array
*/

const Homedata = [
  {
      id: 1,
      title: 'Ossos Brown',
      price: 54995,
      imageName: "https://cdn.shopify.com/s/files/1/0521/9693/3824/products/ossos-brown-1-new_850x.progressive.jpg?v=1645030826",
      ratings: 3,
      reviewNum: 2
  },
  {
      id: 2,
      title: 'Quintos Sand',
      price: 3295,
      imageName: "https://cdn.shopify.com/s/files/1/0521/9693/3824/products/QUTOSDSAN_1_850x.progressive.jpg?v=1658845029://cdn.shopify.com/s/files/1/0521/9693/3824/products/ossos-brown-1-new_850x.progressive.jpg?v=1645030826",
      ratings: 5,
      reviewNum: 5
  },
  
  {
      id: 3,
      title: 'Orjais Tan',
      price: 79995,
      imageName: "https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Orjais-Tan_1_24fbb4c6-c2c1-42e8-a0a2-45b18dd12265_850x.progressive.jpg?v=1634649383",
      ratings: 4,
      reviewNum: 20
  },
  
  {
      id: 4,
      title: 'Sirolo Black',
      price: 74999,
      imageName: "https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Sirolo-Black-Black-Lace-1_850x.progressive.jpg?v=1639065771",
      ratings: 4,
      reviewNum: 23
  },
  {
      id: 5,
      title: 'Quintos White',
      price: 53899,
      imageName: "https://cdn.shopify.com/s/files/1/0521/9693/3824/products/QUTOLEWHT_1_850x.progressive.jpg?v=1658844671",
      ratings: 3,
      reviewNum: 57
  },
  {
      id: 6,
      title: 'Beadnell Navy',
      price: 46995,
      imageName: "https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Beadhall-Navy_1_850x.progressive.jpg?v=1640255582",
      ratings: 5,
      reviewNum: 11
  },
  {
      id: 7,
      title: 'Prio Dark Tan',
      price: 99995,
      imageName: "https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Prio-Dark-Tan_1_850x.progressive.jpg?v=1646064253",
      ratings: 1,
      reviewNum: 12
  },
  {
      id: 8,
      title: 'Sirolo Dark Tan',
      price: 9495,
      imageName: "https://cdn.shopify.com/s/files/1/0521/9693/3824/products/Sirolo-Dk-Tan-1_850x.progressive.jpg?v=1623227953",
      ratings: 4,
      reviewNum: 10
  }
  ]
  
  export default Homedata;
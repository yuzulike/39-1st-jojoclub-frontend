import React, { useEffect, useState, useRef } from 'react';
import './ProductList.scss';
import Modal from './Modal';
import './Modal.scss';
function ProductList() {
  const [productInfoList, setProductInfoList] = useState([]);
  //모달윈도우 만들기
  const [openModal, setOpenModal] = useState(false);
  // const handleClick = id => console.log(id);
  const [getInfo, setGetInfo] = useState(0);
  //캐러셀 만들기
  const [slideLeft, setSlideLeft] = useState(false);
  const productListContainerRef = useRef();
  const [index, setIndex] = useState(0);
  const handleSlideLeft = () => {
    setIndex(index + 1);
    productListContainerRef.current.style.transform = `translate(-(25 * ${
      index + 1
    })%)`;
    console.log(index);
  };

  useEffect(() => {
    fetch('/data/productList.json')
      .then(response => response.json())
      .then(result => setProductInfoList(result));
  }, []);

  const handleModal = id => {
    setOpenModal(true);
    setGetInfo(id);
  };

  return (
    <>
      <div className="productList">
        <button type="button" className="slideLeft" onClick={handleSlideLeft} />
        <div className="productListContainer" ref={productListContainerRef}>
          {productInfoList.map(
            ({ id, productImage, englishName, koreanName, price, size }) => (
              <ul className="productContainer" key={id}>
                <li className="productImg">
                  <img src={productImage} alt="product" />
                </li>
                <div className="productDetailWrap">
                  <li className="newProduct">신제품</li>
                  <li className="productEng">{englishName}</li>
                  <li className="productKor">{koreanName}</li>
                  <div className="priceNsize">
                    <li className="priceTag">{price}</li>
                    <li className="sizeTag">{size}</li>
                  </div>
                  <div className="openModal">
                    <button
                      type="button"
                      className="previewProduct"
                      onClick={() => handleModal(id)}
                    >
                      미리보기
                    </button>
                  </div>
                </div>
              </ul>
            )
          )}
        </div>
        <button type="button" className="slideRight" />
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          productInfo={getInfo}
        />
      </div>
      {/* 여기서부터 전체 리스트 */}
      <div className="allProductListTitle"> 전체 아이템 보기</div>
      <div className="allProductListContainer" ref={productListContainerRef}>
        {productInfoList.map(
          ({ id, productImage, englishName, koreanName, price, size }) => (
            <ul className="productContainer" key={id}>
              <li className="productImg">
                <img src={productImage} alt="product" />
              </li>
              <div className="productDetailWrap">
                <li className="newProduct">신제품</li>
                <li className="productEng">{englishName}</li>
                <li className="productKor">{koreanName}</li>
                <div className="priceNsize">
                  <li className="priceTag">{price}</li>
                  <li className="sizeTag">{size}</li>
                </div>
                <div className="openModal">
                  <button
                    type="button"
                    className="previewProduct"
                    onClick={() => setOpenModal(true)}
                  >
                    미리보기
                  </button>
                </div>
              </div>
            </ul>
          )
        )}
      </div>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        productInfo={getInfo}
      />
    </>
  );
}

export default ProductList;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { purchasesThunk } from "../store/slices/purchases.slice";
import { Container, Row, Col, Badge, Card, CardImg } from "react-bootstrap";
import { format } from "date-fns";
import "../styles/purchases.css";

const Purchases = () => {
  const dispatch = useDispatch();

  const purchases = useSelector((state) => state.pruchases);

  useEffect(() => {
    dispatch(purchasesThunk());
  }, []);

  return (
    <div>
      <h1>My Purchases</h1>

      {/* format(new Date(pass your isostring), 'p, dd/MM/YYYY'); */}

      <Row xs={1} md={1} xl={1} className="mt-3 g-4">
        {purchases.map((purchase) => (
          <Col key={purchases.id}>
            <Card>
              <Card.Header as="h5">
                {format(new Date(purchase.createdAt), "MMMM dd','yyyy")}
              </Card.Header>

              {purchase.cart.products.map((cartProduct) => (
                <Card.Body className="purchases">
                  {/* <div className="paragraph">
                    <p className="p-title">{cartProduct.title}</p>
                    <p className="p-quantity">{cartProduct.productsInCart.quantity}</p>
                    <p className="p-price">Total: $ {cartProduct.price}</p>
                  </div> */}
                  <ul className="purchase-products-list">
                    <li className="product-item">
                      <div className="name">{cartProduct.title}</div>
                      <div className="quantity">
                        <div className="card" style={{width:'4rem',height:'4rem'}}>
                          {cartProduct.productsInCart.quantity}
                        </div>
                      </div>
                      <div className="price">$ {cartProduct.price}</div>
                    </li>
                  </ul>
                </Card.Body>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Purchases;

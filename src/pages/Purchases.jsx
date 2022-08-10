import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { purchasesThunk } from '../store/slices/purchases.slice'
import { Container, Row, Col, Badge, Card, CardImg } from "react-bootstrap";
const Purchases = () => {

    const dispatch = useDispatch()

    const purchases = useSelector(state => state.pruchases)

    useEffect(() => {
        dispatch(purchasesThunk())
    }, [])

    
    return (
        <div>
            <h1>My Purchases</h1>

            <Row xs={1} md={1} xl={1} className="mt-3 g-4">
			{purchases.map((purchase) => (
				
					<Col key={purchases.id}>
					<Card style={{height:'200px'}}>
						<Card.Header as="h5">{purchase.createdAt}</Card.Header>
						<Card.Body >
							<Card.Title className="title">{purchase.cart.products.map((product) =>product.title)}<br/>
								<span className="quantity">{purchase.cart.products.map((product) =>product.productsInCart.quantity)}<br/></span>
								<span className="price">${purchase.cart.products.map((product) =>product.price)}<br/></span>
							</Card.Title>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
        </div>

    );
};

export default Purchases;
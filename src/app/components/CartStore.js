import React from 'react';
import Button from './Button';
import Counter from './Counter';
import Input from './Input';
import ProductDescriptions from './ProductDescriptions';
import ProductImage from './ProductImage';

const CartStore = () => (
  <div>
    <span>
      <h2>My Bag</h2>
      ,
      3 items
    </span>
    <div>
      <span>
        <Counter />
        <ProductImage />
      </span>
      <div>
        <ProductDescriptions />
        <p>size:</p>
        <div>
          <span>XS</span>
          <span>X</span>
          <span>M</span>
          <span>L</span>
        </div>
        <div>
          <p>color:</p>
          <span>
            <Input type="color" value="red" />
          </span>
          <span>
            <Input type="color" value="red" />
          </span>
          <span>
            <Input type="color" value="red" />
          </span>
        </div>
        <div>
          <span>Total</span>
          <span>$200</span>
        </div>
        <div>
          <Button>
            VIEW BAG
          </Button>
          <Button>
            CHECK OUT
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default CartStore;

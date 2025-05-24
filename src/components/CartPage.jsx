import { CartContext } from '../contexts/CartContext';

export const CartPage = () => {
  const { cartItems } = CartContext();

  return (
    <div>
      <h2>カートの中身</h2>
      {cartItems.length === 0 ? (
        <p>カートは空です</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

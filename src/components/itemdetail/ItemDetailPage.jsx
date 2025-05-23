import { useParams } from 'react-router-dom';
import { newItemDate } from '../NewitemDate';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export const ItemDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const selectedItem = newItemDate.find((item) => item.id.toString() === id);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
      <img
        src={selectedItem.image}
        alt={selectedItem.name}
        style={{ marginTop: '5px', width: '500px', height: '500px' }}
      />
      <div>
        <h2>{selectedItem.brand}</h2>
        <h2>{selectedItem.name}</h2>
        <h2>{selectedItem.price}</h2>
        <button onClick={() => addToCart(item)}>カートに追加</button>
      </div>
    </div>
  );
};

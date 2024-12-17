import { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <Map
      center={{ lat: 37.495, lng: 127.0375 }}
      style={{ width: '500px', height: '500px' }}
      level={3}
    >
      <MapMarker
        position={{ lat: 37.495, lng: 127.0375 }}
        clickable={true}
        onClick={() => setIsInfoOpen(true)}
      >
        {isInfoOpen && (
          <div style={{ minWidth: '150px' }}>
            <img
              alt="close"
              width="14"
              height="13"
              src="https://t1.daumcdn.net/localimg/localimages/07/mapjsapi/2x/bt_close.gif"
              style={{
                position: 'absolute',
                right: '5px',
                top: '5px',
                cursor: 'pointer',
              }}
              onClick={() => setIsInfoOpen(false)}
            />
            <div style={{ padding: '5px', color: '#000' }}>슈퍼코딩</div>
          </div>
        )}
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;

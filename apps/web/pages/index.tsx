import dynamic from 'next/dynamic';

// !! warning this is the one that fails
const MyComponent = dynamic(() => import('src/modules/MyComponent').then((m) => m.MyComponent));

// this works perfectly fine
const OtherComponent = dynamic(() => import('OtherComponent').then((m) => m.OtherComponent));

export default function Web() {
  return (
    <div>
      {/* <MyComponent /> */}
      <OtherComponent />
    </div>
  );
}

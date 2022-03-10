type Props = {
  height?: number;
  width?: number;
};

function Spacer(p: Props) {
  return (
    <div
      style={{
        height: p.height || 0,
        width: p.width || 0,
      }}
    />
  );
}

export default Spacer;

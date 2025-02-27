interface VideoProps {
  videoPath: string;
  height: number;
  width: number;
  className?: string;
}

export function Video({ videoPath, height, width, className }: VideoProps) {
  return (
    <div className={className}>
      <video width={width} height={height} muted autoPlay loop>
        <source src={videoPath} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

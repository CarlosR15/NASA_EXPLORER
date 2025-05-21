export interface MarsPhoto {
  id: number;
  sol: number;
  camera: {
    name: string;
    full_name: string;
  };
  img_src: string;
  earth_date: string;
  rover: {
    name: string;
    landing_date: string;
    launch_date: string;
    status: string;
  };
}

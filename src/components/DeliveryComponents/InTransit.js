import { Data } from "../../assets/Data";
import DeliveryDetailsCard from "./DeliveryDetailsCard";

export default function InTransit() {
  const data = Data.filter((item)=> {
    return item.status ==="In Transit"
  });

  return (
    <div className="grid grid-cols-[0.5fr_1fr]">
      <section className="flex flex-col gap-5">
        {
          data.map((detail) => (
            <DeliveryDetailsCard key={detail.itemId} {...detail} />
          ))
        }
      </section>
      <section>
        {/* <Map
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14
          }}
          style={{ width: 600, height: 400 }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=get_your_own_key"
        /> */}
      </section>
    </div>
  )
}

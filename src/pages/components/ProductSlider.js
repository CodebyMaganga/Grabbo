import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function ProductSlider() {
  return (
    <div className="grid place-items-center mt-20 min-[800px]:flex min-[800px]:flex-row min-[800px]:justify-between">
      <Card
        shadow={false}
        className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center mt-10"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://wallpaperaccess.com/full/2792340.jpg')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h3"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Fresh Picks: <span className="text-applegreen">Unbeleafable </span>
            <span className="text-gold">Veggie</span>{" "}
            <span className="text-engorange">Deals</span> Await!
          </Typography>
          <Link to="/menu">
            <Button className="mb-4 text-gray-400">Shop →</Button>
          </Link>
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center mt-10"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/h5pl2zvdmduyfo6pniws')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h3"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            <span className="text-applegreen">Revitalize </span>
            with our <span className="text-applegreen">Fresh </span>
            <span className="text-gold">Juices </span>&
            <span className="text-engorange"> Smoothies</span>
          </Typography>
          <Link to="/menu">
            <Button className="mb-4 text-gray-400">Shop →</Button>
          </Link>
        </CardBody>
      </Card>
      <Card
        shadow={false}
        className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center mt-10"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.creativemarket.com/0.1.0/ps/4644233/910/607/m2/fpnw/wm1/lbq1h50waqghjciuabzljolqjtlrpdwtdowaib085qlcaoac9fdylee1l4xoypec-.jpg?1529662543&s=cb2197708373f65c661f96634278378f')] bg-cover bg-center"
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12">
          <Typography
            variant="h3"
            color="white"
            className="mb-6 font-medium leading-[1.5]"
          >
            Farm
            <span className="text-cocoabrown"> Fresh: </span>
            Goodness: Explore Our
            <span className="text-applegreen"> Animal </span>
            Products
            <span className="text-engorange"> Range</span>
          </Typography>
          <Link to="/menu">
            <Button className="mb-4 text-gray-400">Shop →</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}

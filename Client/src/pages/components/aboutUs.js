import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-gold"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const AboutUs = () => {
  return (
    <div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#89A018"
            fill-opacity="1"
            d="M0,64L34.3,80C68.6,96,137,128,206,149.3C274.3,171,343,181,411,176C480,171,549,149,617,138.7C685.7,128,754,128,823,122.7C891.4,117,960,107,1029,112C1097.1,117,1166,139,1234,170.7C1302.9,203,1371,245,1406,266.7L1440,288L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-applegreen grid place-items-center min-[800px]:flex min-[800px]:flex-row min-[800px]:justify-between">
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem]"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="sm"
              variant="circular"
              src="https://i.pinimg.com/originals/82/76/92/827692a7e7afc71b3cc59389a403c5ac.jpg"
              alt="tania andrew"
              className="h-[15rem] rounded-full "
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  John Musiala
                </Typography>
              </div>
              <Typography color="white">Frontend Lead @ Google</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;Grabbo is a game-changer in the grocery app industry! Its
              seamless interface, expansive selection, and user-friendly
              experience make it the next big thing. From convenience to
              quality, Grabbo sets a new standard, delivering a remarkable
              shopping experience to users. It's poised to revolutionize how we
              shop for groceries! !!!&quot;
            </Typography>
            <div className="5 flex items-center gap-0 color-gold">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem]"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              src="https://i.pinimg.com/originals/92/15/06/921506b456d62258a3b0537dd5133e45.jpg"
              alt="tania andrew"
              className="h-[15rem] rounded-full "
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Tania Wangeci
                </Typography>
              </div>
              <Typography color="white">Frontend Lead @ Google</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;Grabbo isn't just an app; it's a grocery-shopping
              revolution! Its innovative approach, vast variety of products, and
              intuitive design redefine convenience. As a corporate lead, I
              foresee Grabbo becoming the go-to choice for anyone seeking a
              hassle-free, efficient, and enjoyable grocery shopping experience.
              It's the future of grocery apps, setting a new benchmark in the
              industry! !!!&quot;
            </Typography>
            <div className="5 flex items-center gap-0 color-gold">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </CardBody>
        </Card>
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem]"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
              className="h-[15rem] rounded-full "
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Tania Andrew
                </Typography>
              </div>
              <Typography color="white">Frontend Lead @ Google</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;Grabbo simplifies the grocery shopping experience like never
              before! With its intuitive interface and comprehensive range of
              products, navigating and purchasing essentials becomes effortless.
              This app streamlines the entire process, making grocery shopping
              not just convenient but also enjoyable. Grabbo is the ultimate
              solution for anyone looking to effortlessly manage their grocery
              needs. !!!&quot;
            </Typography>
            <div className="5 flex items-center gap-0 color-gold">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;

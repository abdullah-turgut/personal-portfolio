function About({ data }) {
  console.log(data);
  return <div className="container mx-auto">{data.data.attributes.name}</div>;
}

export default About;

import { Box, Typography } from "@mui/material";
import axios from "axios";
import React from 'react';
import {useParams} from "react-router-dom";
import {ClipLoader } from "react-spinners";

const SinglePage = () => {
    const {id} = useParams();
    const [data, setData] = React.useState(null);
    const [loading, setLoadind] = React.useState(true);
    const [error, seterror] = React.useState(null);
    const [Spinner, setSpinner] = React.useState(false);
    let navigate = useNavigate();
    console.log("id useparam", id);
    const override = {
        display: "block",
        margin: "200px auto",
        borderColor: "black",
    };

    React.useEffect(() => {
        const getPostId = async () => {
            let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

            try {
                setLoading(true);
                const res = await axios.get(url);
                console.log(res);

                setData(res.data);
                setLoading(false);
                seterror(null);
            } catch (err) {
                seterror(err.message);
            } finally {
                setLoading(false);
            }
        };
        getPostId();
    }, [id]);

    if (loading)
  return (
     <ClipLoader
     loading={loading}
     cssOverride= {override}
     size={150}
     aria-label="Loading Spinner"
     data-testid="loader"
     />
  );
  if (error) return <h1 style= {{ color: "red"}}>
    Error: {error}</h1>;

    return (
        <Box
        sx= {{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            tetAlign: "center",
        }}
        >
            <Typography variant="body1" color= "text.secondary">
                {data.userId}{" "}
            </Typography>
            <Typography variant="h2" gutterBottom>
                {" "}
                title:{data.title}
            </Typography>
            <Typography variant="body1" color="text. secondary">
                {data.body}{" "}
            </Typography>
            </Box>
    );
};

export default SinglePage;

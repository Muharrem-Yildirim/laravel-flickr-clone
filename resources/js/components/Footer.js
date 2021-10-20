import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";

const Container = styled.div`
    height: 200px;
    position: relative;
    background: black;
    margin-top: auto;
    padding: 25px 0px 25px 0px;
    color: white;

    box-shadow: 0px 10px 5px rgb(0 0 0 / 12%), 0px -10px 5px rgb(0 0 0 / 12%);
`;

const Link = styled(MuiLink)`
    text-decoration: none;
    margin-top: 10px;

    &:hover {
        opacity: 0.8;
    }
`;

function Footer() {
    return (
        <Container>
            <Grid
                item
                xs={8}
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <div>
                    <Typography variant="h6" className="font-montserrat">
                        Site
                    </Typography>
                    <ul
                        style={{ listStyle: "none" }}
                        className="font-montserrat"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                    </ul>
                </div>
            </Grid>
        </Container>
    );
}

export default Footer;

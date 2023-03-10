import React, { useState } from "react";

import { Row, Col, Typography } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { UploadArea, Terminal } from "../../components";

import "./homepage.styles.scss";

const Homepage = () => {
    const [output, setOutput] = useState("");
    const { Title, Paragraph } = Typography;
    
    return (
        <>
            <Row justify="center" align="middle" className="main-title">
                <Col xs={18} md={24} align="center">
                    <Title level={2}>
                        Compile it like a breeze. Run it like a pro.
                    </Title>
                    <Paragraph type="secondary">
                        by the indisputable leaders in the strategic conversion
                        of{" "}
                        <FontAwesomeIcon
                            icon={faMugHot}
                            className="no-indent"
                        />{" "}
                        into <FontAwesomeIcon icon={faCode} />
                    </Paragraph>
                </Col>
            </Row>
            <Row justify="center" align="middle">
                <Col xs={18} md={14} lg={9} xl={7}>
                    <UploadArea setOutput={setOutput} />
                </Col>
            </Row>
            {output ? (
                <Row justify="center" align="middle">
                    <Col xs={18} md={14} lg={9} xl={7} className="terminal-output" >
                        <Terminal output={output}/>
                    </Col>
                </Row>
            ) : null}
        </>
    );
};

export default Homepage;

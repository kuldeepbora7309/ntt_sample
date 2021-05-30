import {
  Button,
  Input,
  Divider,
  Row,
  Col,
  Form,
  Card,
  Layout,
  Menu,
  Breadcrumb,
  Select,
} from "antd";

import { DownloadOutlined } from "@ant-design/icons";

export const ButtonField = (props) => {
  let icon = "";
  if (props.icon === "DownloadOutlined") {
    icon = <DownloadOutlined />;
  }
  return (
    <>
      <Button
        {...props}
        type={props.type ? props.type : "primary"}
        {...(icon && { icon: icon })}
      >
        {props.children}
      </Button>
    </>
  );
};

export const FileField = (props) => {
  return (
    <>
      <input type="file" className="form-control" {...props} />
    </>
  );
};

export const TextField = (props) => {
  var { isValid, isRequired, message, ...others } = props;
  return (
    <>
      <Input type="text" {...others} />
      {isRequired && isValid === false && (
        <div className="help-block">{message}</div>
      )}
    </>
  );
};

export const SelectField = (props) => {
  var { isValid, isRequired, message, ...others } = props;
  return (
    <>
      <Select {...others}>{props.children}</Select>
      {isRequired && isValid === false && (
        <div className="help-block">{message}</div>
      )}
    </>
  );
};

export const DividerField = (props) => {
  return (
    <>
      <Divider {...props} />
    </>
  );
};

export const RowField = (props) => {
  return (
    <>
      <Row {...props}>{props.children}</Row>
    </>
  );
};

export const ColField = (props) => {
  return (
    <>
      <Col {...props} {...(props.size && { span: props.size })}>
        {props.children}
      </Col>
    </>
  );
};

export const FormField = (props) => {
  return (
    <>
      <Form {...props}>{props.children}</Form>
    </>
  );
};

export const CardField = (props) => {
  return (
    <>
      <Card {...props}>{props.children}</Card>
    </>
  );
};

export const LayoutBlock = (props) => {
  return (
    <>
      <Layout {...props}>{props.children}</Layout>
    </>
  );
};

export const ContentBlock = (props) => {
  const { Content } = Layout;
  return (
    <>
      <Content {...props}>{props.children}</Content>
    </>
  );
};

export const MenuBlock = (props) => {
  return (
    <>
      <Menu {...props}>{props.children}</Menu>
    </>
  );
};

export const MenuItemBlock = (props) => {
  return (
    <>
      <Menu.Item {...props}>{props.children}</Menu.Item>
    </>
  );
};

export const BreadcrumbBlock = (props) => {
  return (
    <>
      <Breadcrumb {...props}>{props.children}</Breadcrumb>
    </>
  );
};

export const BreadcrumbItemBlock = (props) => {
  return (
    <>
      <Breadcrumb.Item {...props}>{props.children}</Breadcrumb.Item>
    </>
  );
};

export const HeaderBlock = (props) => {
  const { Header } = Layout;
  return (
    <>
      <Header {...props}>{props.children}</Header>
    </>
  );
};

export const FooterBlock = (props) => {
  const { Footer } = Layout;
  return (
    <>
      <Footer {...props}>{props.children}</Footer>
    </>
  );
};

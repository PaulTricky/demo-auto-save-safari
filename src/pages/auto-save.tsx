import CreatePasswordForm from "@/domains/Onboarding/components/CreatePasswordForm"
import { Col, Row } from "antd/lib";
import { useRouter } from "next/router"

export default () => {

  const router = useRouter();

  return (
    <Row className="w-full">
      <Col span={12}>
      <CreatePasswordForm isTestAutoSaved onNextStep={() => router.push('/home')} />
      </Col>
      <Col  span={12}>
        <h3>Code: </h3>
      <img src="/assets/auto-save.png" height={500} width={'auto'} />
      </Col>
    </Row>
  )
}
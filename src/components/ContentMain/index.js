import React from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import LoadableComponent from '../../utils/LoadableComponent';
import PrivateRoute from '../PrivateRoute';
import FrontendAuth from '@src/components/ContentMain/FrontendAuth.js';

const Home = LoadableComponent(() => import('../../routes/Home/index')); //参数一定要是函数，否则不会懒加载，只会代码拆分

//基本组件Demo
const ButtonDemo = LoadableComponent(() => import('../../routes/General/ButtonDemo/index'));
const IconDemo = LoadableComponent(() => import('../../routes/General/IconDemo/index'));

//导航组件Demo
const DropdownDemo = LoadableComponent(() => import('../../routes/Navigation/DropdownDemo/index'));
const MenuDemo = LoadableComponent(() => import('../../routes/Navigation/MenuDemo/index'));
const StepsDemo = LoadableComponent(() => import('../../routes/Navigation/StepsDemo/index'));

//输入组件Demo
const FormDemo1 = LoadableComponent(() => import('../../routes/Entry/FormDemo/FormDemo1'));
const FormDemo2 = LoadableComponent(() => import('../../routes/Entry/FormDemo/FormDemo2'));
const UploadDemo = LoadableComponent(() => import('../../routes/Entry/UploadDemo/index'));

//显示组件Demo
const CarouselDemo = LoadableComponent(() => import('../../routes/Display/CarouselDemo/index'));
const CollapseDemo = LoadableComponent(() => import('../../routes/Display/CollapseDemo/index'));
const ListDemo = LoadableComponent(() => import('../../routes/Display/ListDemo/index'));
const TableDemo = LoadableComponent(() => import('../../routes/Display/TableDemo/index'));
const TabsDemo = LoadableComponent(() => import('../../routes/Display/TabsDemo/index'));

//反馈组件Demo
const SpinDemo = LoadableComponent(() => import('../../routes/Feedback/SpinDemo/index'));
const ModalDemo = LoadableComponent(() => import('../../routes/Feedback/ModalDemo/index'));
const NotificationDemo = LoadableComponent(() => import('../../routes/Feedback/NotificationDemo/index'));

//其它
const AnimationDemo = LoadableComponent(() => import('../../routes/Other/AnimationDemo/index'));
const GalleryDemo = LoadableComponent(() => import('../../routes/Other/GalleryDemo/index'));
const DraftDemo = LoadableComponent(() => import('../../routes/Other/DraftDemo/index'));
const ChartDemo = LoadableComponent(() => import('../../routes/Other/ChartDemo/index'));
const LoadingDemo = LoadableComponent(() => import('../../routes/Other/LoadingDemo/index'));
const ErrorPage = LoadableComponent(() => import('../../routes/Other/ErrorPage/index'));
const SpringText = LoadableComponent(() => import('../../routes/Other/SpringText/index'));

//关于
const About = LoadableComponent(() => import('../../routes/About/index'));

//权限管理
const RoleManage = LoadableComponent(() => import('../../routes/AuthManage/RoleManage/RoleManage'));
const ProductManage = LoadableComponent(() => import('../../routes/AuthManage/ProductManage/ProductManage'));

@withRouter
class ContentMain0 extends React.Component {
  render() {
    return (
      <div style={{ padding: 16, position: 'relative' }}>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />

          <PrivateRoute exact path="/home/general/button" component={ButtonDemo} />
          <PrivateRoute exact path="/home/general/icon" component={IconDemo} />

          <PrivateRoute exact path="/home/navigation/dropdown" component={DropdownDemo} />
          <PrivateRoute exact path="/home/navigation/menu" component={MenuDemo} />
          <PrivateRoute exact path="/home/navigation/steps" component={StepsDemo} />

          <PrivateRoute exact path="/home/entry/form/basic-form" component={FormDemo1} />
          <PrivateRoute exact path="/home/entry/form/step-form" component={FormDemo2} />
          <PrivateRoute exact path="/home/entry/upload" component={UploadDemo} />

          <PrivateRoute exact path="/home/display/carousel" component={CarouselDemo} />
          <PrivateRoute exact path="/home/display/collapse" component={CollapseDemo} />
          <PrivateRoute exact path="/home/display/list" component={ListDemo} />
          <PrivateRoute exact path="/home/display/table" component={TableDemo} />
          <PrivateRoute exact path="/home/display/tabs" component={TabsDemo} />

          <PrivateRoute exact path="/home/feedback/modal" component={ModalDemo} />
          <PrivateRoute exact path="/home/feedback/notification" component={NotificationDemo} />
          <PrivateRoute exact path="/home/feedback/spin" component={SpinDemo} />

          <PrivateRoute exact path="/home/other/animation" component={AnimationDemo} />
          <PrivateRoute exact path="/home/other/gallery" component={GalleryDemo} />
          <PrivateRoute exact path="/home/other/draft" component={DraftDemo} />
          <PrivateRoute exact path="/home/other/chart" component={ChartDemo} />
          <PrivateRoute exact path="/home/other/loading" component={LoadingDemo} />
          <PrivateRoute exact path="/home/other/404" component={ErrorPage} />
          <PrivateRoute exact path="/home/other/springText" component={SpringText} />

          <PrivateRoute exact path="/home/about" component={About} />

          <PrivateRoute exact path="/home/authManage/roleManage" component={RoleManage} />
          <PrivateRoute exact path="/home/authManage/ProductManage" component={ProductManage} />

          <Redirect exact from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}
const routes = [
  { path: '/home', component: Home },

  { path: '/home/general/button', component: ButtonDemo },
  { path: '/home/general/icon', component: IconDemo },

  { path: '/home/navigation/dropdown', component: DropdownDemo },
  { path: '/home/navigation/menu', component: MenuDemo },
  { path: '/home/navigation/steps', component: StepsDemo },

  { path: '/home/entry/form/basic-form', component: FormDemo1 },
  { path: '/home/entry/form/step-form', component: FormDemo2 },
  { path: '/home/entry/upload', component: UploadDemo },

  { path: '/home/display/carousel', component: CarouselDemo },
  { path: '/home/display/collapse', component: CollapseDemo },
  { path: '/home/display/list', component: ListDemo },
  { path: '/home/display/table', component: TableDemo },
  { path: '/home/display/tabs', component: TabsDemo },
  { path: '/home/feedback/modal', component: ModalDemo },
  { path: '/home/feedback/notification', component: NotificationDemo },
  { path: '/home/feedback/spin', component: SpinDemo },
  { path: '/home/other/animation', component: AnimationDemo },
  { path: '/home/other/gallery', component: GalleryDemo },
  { path: '/home/other/draft', component: DraftDemo },
  { path: '/home/other/chart', component: ChartDemo },
  { path: '/home/other/loading', component: LoadingDemo },
  { path: '/home/other/404', component: ErrorPage },
  { path: '/home/other/springText', component: SpringText },

  { path: '/home/about', component: About },

  { path: '/home/authManage/roleManage', component: RoleManage },
  { path: '/home/authManage/productManage', component: ProductManage },
];

const ContentMain = () => (
  <div style={{ padding: 16, position: 'relative' }}>
    {/*只匹配一个，匹配成功就不往下匹配，效率高*/}
    <Switch>
      <FrontendAuth routerConfig={routes} />
    </Switch>
  </div>
);

export default ContentMain;

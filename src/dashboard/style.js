import styled from 'styled-components';
import HeightIcon from '@material-ui/icons/Height';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import { Button, Typography } from '@material-ui/core';
import { PlayArrow } from '@material-ui/icons';

export const DashboardContainer = styled.div`
  background-color: #d5efca;
  padding: 40px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const FirstCard = styled.div`
  width: 300px;
  border-radius: 30px;
  min-height: 600px;
  background-image: url('https://im.whatshot.in/img/2020/Mar/erik-brolin-wmznegkcsmw-unsplash-cropped-1584700767.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const SliderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 60px;
  border-radius: 30px 30px 0 0;
  display: flex;
  align-items: center;
  border: none !important;
`;

export const EachDot = styled.div`
  border-radius: 50%;
  height: 5px;
  width: 5px;
  margin-right: 10px;
  background-color: ${({ inputcolor }) => inputcolor || '#fff'};
`;

export const ExpandArrow = styled(HeightIcon)`
  transform: rotate(45deg);
  color: #fff;
`;

export const Eyes = styled(VisibilityOutlinedIcon)`
  color: #fff;
  font-size: 12px !important;
`;

export const ExpandArrowContainer = styled.div`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SeenContainer = styled.div`
  margin-top: 420px;
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
  align-items: center;
`;

export const SeenText = styled(Typography)`
  color: #fff;
  margin-left: 10px !important;
  font-size: 12px !important;
`;

export const YogaCard = styled.div`
  border-radius: 20px;
  box-shadow: 1px 1px 10px #e4e4e4;
  width: 100%;
  min-height: 120px;
  position: absolute;
  background-color: #fff;
  margin-top: 5px;
`;

export const YogaText = styled(Typography)`
  font-weight: bold !important;
  font-size: 19px;
`;

export const YogaSubText = styled(Typography)`
  font-weight: bold !important;
  font-size: 12px !important;
  color: #b2b5b9;
`;

export const OuterActiveContainer = styled.div`
  height: 7px;
  width: 7px;
  background-color: #f9cac4;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerActiveContainer = styled.div`
  height: 3px;
  width: 3px;
  background-color: #e17674;
  border-radius: 50%;
`;

export const DetailsCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  width: 260px;
`;

export const FollowerText = styled(Typography)`
  font-size: 10px !important;
  color: green;
  font-weight: bold !important;
`;

export const CloseContainer = styled.div`
  border-radius: 50%;
  background-color: #efe6e6;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
`;

export const ImageContainer = styled.div`
  border-radius: 50%;
  width: 60px;
  background-color: #13bf7b;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const DividerContainer = styled.hr`
  border: 0.1px solid #e4e4e4;
  margin: 30px 0px 20px 0 !important;
`;

export const AnalyticsText = styled(Typography)`
  font-weight: bold !important;
  font-size: 18px !important;
`;

export const AnalyticsSubText = styled(Typography)`
  font-size: 12px !important;
  font-weight: 500 !important;
  color: #989898;
`;

export const FollowBtn = styled(Button)`
  text-transform: none !important;
  background-color: #e17674 !important;
  color: #fff !important;
  border-radius: 10px !important;
  font-size: 12px !important;
  padding: 5px 12px !important;
`;

export const CourseBorder = styled.div`
  border-radius: 10px;
  padding: 4px 12px;
  border: 1px solid #e17674;
  display: inline-block;
  margin-right: 10px !important;
`;

export const ChipText = styled(Typography)`
  font-size: 12px !important;
  font-weight: 500 !important;
  color: #989898;
`;

export const PlayerText = styled(Typography)`
  font-size: 16px !important;
  font-weight: bold !important;
`;

export const PlayerSubText = styled(Typography)`
  font-size: 12px !important;
  font-weight: bold !important;
  color: #afafaf;
`;

export const PlayerContainer = styled.div`
  height: 200px;
  margin-top: 30px;
  overflow: scroll;
  background-color: #f6f6f8;
  padding: 0 10px;
`;

export const PlayerContent = styled.div`
  border-radius: 10px;
  width: 100%;
  min-height: 50px;
  background-color: #fff;
  margin-bottom: 15px !important;
  margin-top: 15px !important;
`;

export const PlayerImg = styled.div`
  border-radius: 10px;
  width: 50px;
  height: 50px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;

export const PlayerBorder = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #e17674;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const PlayerIcon = styled(PlayArrow)`
  color: #e17674;
  cursor: pointer;
`;

export const BigPlayerIcon = styled(PlayArrow)`
  color: #fff;
  cursor: pointer;
`;

export const BigPlayContainer = styled.div`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36%;
`;

export const OverlayContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
`;

export const HorizontalTabs = styled.div`
  padding: 5px 5px 5px 20px;
  margin: 5px;
  display: flex;
  overflow: scroll;
`;

export const DiscussionContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 1px -5px 3px #e4e4e4;
`;

export const DiscussionText = styled(Typography)`
  font-size: 11px !important;
  font-weight: bold !important;
`;

export const ActiveIcon = styled.div`
  height: 6px;
  width: 6px;
  border: 2px solid #fff;
  background-color: #e17674;
  position: absolute;
  border-radius: 50%;
  top: 6%;
  left: 3%;
`;

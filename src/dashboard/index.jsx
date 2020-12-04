/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Grid, InputAdornment } from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import PixIcon from '../assets/pix1.png';
import Pix2Icon from '../assets/px2.png';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TuneIcon from '@material-ui/icons/Tune';
import BgIcon from '../assets/bg.png';
import ManIcon from '../assets/man.png';
import {
  DashboardContainer,
  EachDot,
  ExpandArrow,
  ExpandArrowContainer,
  Eyes,
  FirstCard,
  InnerActiveContainer,
  OuterActiveContainer,
  SeenContainer,
  SeenText,
  SliderContainer,
  YogaCard,
  YogaText,
  YogaSubText,
  DetailsCard,
  FollowerText,
  CloseContainer,
  ImageContainer,
  DividerContainer,
  AnalyticsText,
  AnalyticsSubText,
  FollowBtn,
  CourseBorder,
  ChipText,
  PlayerContainer,
  PlayerContent,
  PlayerText,
  PlayerSubText,
  PlayerBorder,
  PlayerIcon,
  BigPlayContainer,
  BigPlayerIcon,
  OverlayContainer,
  HorizontalTabs,
  DiscussionContainer,
  DiscussionText,
  ActiveIcon,
} from './style';
import InputField from '../components/InputField';
import { useForm } from 'react-hook-form';
import { ArrowForward } from '@material-ui/icons';

export default function Dashboard() {
  const { control, errors } = useForm({
    defaultValues: {
      search: '',
    },
  });
  const RenderPlayerContainer = ({ src, title, author }) => {
    return (
      <PlayerContent>
        <Box
          py="5px"
          px="10px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <img src={src} alt="image" />
          </Box>
          <Box>
            <PlayerText>{title}</PlayerText>
            <PlayerSubText>{author}</PlayerSubText>
          </Box>
          <Box>
            <PlayerBorder>
              <PlayerIcon />
            </PlayerBorder>
          </Box>
        </Box>
      </PlayerContent>
    );
  };
  return (
    <DashboardContainer>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={4} style={{ marginBottom: '10%' }}>
          <FirstCard>
            <SliderContainer>
              <Box px="10px" display="flex">
                <EachDot />
                <EachDot />
                <EachDot
                  inputcolor="#A0A9B9"
                  style={{ width: '140px', borderRadius: '20px' }}
                >
                  <EachDot style={{ width: '30px', borderRadius: '20px' }} />
                </EachDot>
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
              </Box>
            </SliderContainer>
            <Box display="flex" justifyContent="flex-end" px="30px" mt="20px">
              <ExpandArrowContainer>
                <ExpandArrow />
              </ExpandArrowContainer>
            </Box>
            <SeenContainer>
              <Eyes />
              <SeenText>950</SeenText>
            </SeenContainer>
            <YogaCard>
              <Box pt="10px" display="flex" justifyContent="center" mb="10px">
                <EachDot
                  inputcolor="#dce3ef"
                  style={{ width: '30px', borderRadius: '20px' }}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" pr="30px">
                <Box>
                  <Box display="flex" pl="20px" mt="10px" alignItems="center">
                    <Box>
                      <YogaText>Yoga at Home</YogaText>
                    </Box>
                    <Box ml="10px">
                      <OuterActiveContainer>
                        <InnerActiveContainer />
                      </OuterActiveContainer>
                    </Box>
                  </Box>
                  <Box pl="20px">
                    <YogaSubText>Sarah Cooper</YogaSubText>
                  </Box>
                </Box>
                <Box>
                  <img width="60px" src={BgIcon} alt="placeholder" />
                </Box>
              </Box>
            </YogaCard>
          </FirstCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <DetailsCard>
              <Box p="20px">
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <ImageContainer>
                    <img
                      width="50px"
                      src={
                        'https://www.clipartmax.com/png/full/223-2236392_female-headshot-placeholder-female-profile-icon-png.png'
                      }
                      alt="placeholder"
                    />
                    <ActiveIcon />
                  </ImageContainer>
                  <Box>
                    <YogaText>Sarah Cooper</YogaText>
                    <YogaSubText>Veteran Yoga Instructor</YogaSubText>
                    <FollowerText>3.2k Followers</FollowerText>
                  </Box>
                  <Box>
                    <CloseContainer>
                      <CloseIcon style={{ fontSize: '12px' }} />
                    </CloseContainer>
                  </Box>
                </Box>
                <DividerContainer />
                <Box display="flex" justifyContent="space-between">
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <AnalyticsText>3700+</AnalyticsText>
                    <AnalyticsSubText>Students</AnalyticsSubText>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <AnalyticsText>13</AnalyticsText>
                    <AnalyticsSubText>Courses</AnalyticsSubText>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="column"
                  >
                    <AnalyticsText>22hrs</AnalyticsText>
                    <AnalyticsSubText>Videos</AnalyticsSubText>
                  </Box>
                </Box>
                <DividerContainer />
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display="flex">
                    <TwitterIcon />
                    <Box ml="20px">
                      <InstagramIcon />
                    </Box>
                  </Box>
                  <Box>
                    <FollowBtn
                      startIcon={<AddIcon style={{ color: '#fff' }} />}
                    >
                      Follow
                    </FollowBtn>
                  </Box>
                </Box>
              </Box>
            </DetailsCard>
          </Box>
          <Box mt="20px">
            <DetailsCard>
              <Box display="flex" justifyContent="space-between">
                <YogaText>Course Catalogue</YogaText>
                <TuneIcon
                  style={{ transform: 'rotate(90deg)', color: '#e17674' }}
                />
              </Box>
              <Box display="flex" mt="10px">
                <CourseBorder>
                  <Box display="flex" alignItems="center">
                    <ChipText>Peace</ChipText>
                    <CloseIcon style={{ fontSize: '14px' }} />
                  </Box>
                </CourseBorder>
                <CourseBorder>
                  <Box display="flex" alignItems="center">
                    <ChipText>Short Duration</ChipText>
                    <CloseIcon style={{ fontSize: '14px' }} />
                  </Box>
                </CourseBorder>
              </Box>
              <PlayerContainer>
                <RenderPlayerContainer
                  src={PixIcon}
                  title="Midnight Bliss"
                  author="David Gilmour"
                />
                <RenderPlayerContainer
                src={Pix2Icon}
                title="Visualization 101"
                  author="Harsimran Singh"
                />
                <RenderPlayerContainer
                src={Pix2Icon}
                title="Meditation Basic"
                author="David Gilmour"
                />
              </PlayerContainer>
            </DetailsCard>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box height="92vh">
          <FirstCard style={{ height: '300px', minHeight: '340px' }}>
            <SliderContainer>
              <Box px="10px" display="flex">
                <EachDot />
                <EachDot />
                <EachDot
                  inputcolor="#A0A9B9"
                  style={{ width: '140px', borderRadius: '20px' }}
                >
                  <EachDot style={{ width: '50px', borderRadius: '20px' }} />
                </EachDot>
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
                <EachDot inputcolor="#A0A9B9" />
              </Box>
            </SliderContainer>
            <OverlayContainer>
              <Box display="flex" justifyContent="center" px="30px">
                <BigPlayContainer>
                  <BigPlayerIcon fontSize="large" />
                </BigPlayContainer>
              </Box>
              <SeenContainer style={{ marginTop: '28%' }}>
                <Eyes />
                <SeenText>974</SeenText>
              </SeenContainer>
            </OverlayContainer>
            <YogaCard
              style={{ margin: '0', paddingBottom: '10px', bottom: '-100%' }}
            >
              <Box pt="10px" display="flex" justifyContent="center" mb="10px">
                <EachDot
                  inputcolor="#dce3ef"
                  style={{ width: '30px', borderRadius: '20px' }}
                />
              </Box>
              <Box display="flex" justifyContent="space-between" pr="30px">
                <Box>
                  <Box display="flex" pl="20px" mt="10px" alignItems="center">
                    <Box>
                      <YogaText>Yoga at Home</YogaText>
                    </Box>
                    <Box ml="10px">
                      <OuterActiveContainer>
                        <InnerActiveContainer />
                      </OuterActiveContainer>
                    </Box>
                  </Box>
                  <Box pl="20px">
                    <YogaSubText>Sarah Cooper</YogaSubText>
                  </Box>
                </Box>
                <Box>
                  <img width="60px" src={BgIcon} alt="placeholder" />
                </Box>
              </Box>
              <DiscussionContainer>
                <HorizontalTabs>
                  <CourseBorder>
                    <Box display="flex" alignItems="center">
                      <ChipText>Discussion</ChipText>
                      <ExpandMoreIcon style={{ fontSize: '14px' }} />
                    </Box>
                  </CourseBorder>
                  <Box display="flex" alignItems="center" pr="15px">
                    <ChipText>Details</ChipText>
                  </Box>
                  <Box display="flex" alignItems="center" pr="15px">
                    <ChipText>Transcript</ChipText>
                  </Box>
                  <Box display="flex" alignItems="center" pr="15px">
                    <ChipText>NoteBooks</ChipText>
                  </Box>
                </HorizontalTabs>
                <Box>
                  <Box display="flex" alignItems="center">
                    <Box pl="20px">
                      <img width="60px" src={ManIcon} alt="placeholder" />
                    </Box>
                    <Box px="10px">
                      <PlayerSubText>Samuel K</PlayerSubText>
                      <DiscussionText>
                        Thank you for this live course as now we can workout
                        during this pandemic
                      </DiscussionText>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Box pl="20px">
                      <img width="60px" src={BgIcon} alt="placeholder" />
                    </Box>
                    <Box px="10px">
                      <PlayerSubText>Misha Singh</PlayerSubText>
                      <DiscussionText>
                        Hello from India. Thank you for this session
                      </DiscussionText>
                    </Box>
                  </Box>
                  <Box px="20px">
                    <InputField
                      errors={errors}
                      control={control}
                      inputName="search"
                      textProps={{
                        placeholder: 'Type Comment',
                        type: 'email',
                        InputProps: {
                          style: {
                            backgroundColor: '#ECF0F3',
                            borderRadius: '10px',
                            fontSize: '12px',
                            padding: '5px 0',
                            marginBottom: '20px',
                          },
                          endAdornment: (
                            <InputAdornment>
                              <ArrowForward style={{ color: '#e17674' }} />
                            </InputAdornment>
                          ),
                        },
                      }}
                    />
                  </Box>
                </Box>
              </DiscussionContainer>
            </YogaCard>
          </FirstCard>
          </Box>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
}

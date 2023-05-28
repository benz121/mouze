"use client";
import { Box, Skeleton } from '@mui/material';

export const TabledataLoading = () => {
  return (
    <>
      <div className='flex space-x-2 justify-end'>
        <Skeleton variant="text" className='self-end' height={30} width={120} animation="wave" />
        <Skeleton variant="text" className='self-end' height={30} width={120} animation="wave" />
        <Skeleton variant="text" className='self-end' height={30} width={120} animation="wave" />
        <Skeleton variant="text" className='self-end' height={30} width={120} animation="wave" />
      </div>
      <div className='flex space-x-2'>
        <Skeleton variant="text" height={50} width={"100%"} animation="wave" />
        <Skeleton variant="text" height={50} width={"100%"} animation="wave" />
        <Skeleton variant="text" height={50} width={"100%"} animation="wave" />
        <Skeleton variant="text" height={50} width={"100%"} animation="wave" />
        <Skeleton variant="text" height={50} width={"100%"} animation="wave" />
      </div>
      <Skeleton variant="rectangular" height={200} width={'100%'} animation="wave" />
    </>
  );
};
export const StatusLoading = () => {
  return (
    <>
      <div className='flex space-x-2'>
        <Skeleton variant="text" height={60} width={"100%"} animation="wave" />
        <Skeleton variant="text" height={60} width={"100%"} animation="wave" />
        <Skeleton variant="text" height={60} width={"100%"} animation="wave" />
        <Skeleton variant="text" height={60} width={"100%"} animation="wave" />
        <Skeleton variant="text" height={60} width={"100%"} animation="wave" />
        <Skeleton variant="text" height={60} width={"100%"} animation="wave" />

      </div>
      <Skeleton variant="rectangular" height={100} width={'100%'} animation="wave" />
    </>
  );
};

const SystemInfoLoading = () => {
  return (
    <Box sx={{ width: "100%" }}>
      {/* <div className=" border rounded-md h-[calc(100vh-150px)] w-2/5 border-gray-200"> */}
        <div className='flex justify-around items-center z-10'>
          <div className="col p-2 mt-2">
            <div className="row">
              <Skeleton variant="text" width={250} height={50} />
            </div>
            <div className="row">
              <div className="flex space-x-2">
                <Skeleton variant="text" width={200} height={20} />
                <Skeleton variant="text" width={100} height={20} />
              </div>
            </div>
          </div>
          <div>
            <Skeleton variant="circle" width={60} height={60} />
          </div>
        </div>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className='bg-white sticky top-[72px] z-10'>
        </Box>
        <div className='h-[calc(100vh-280px)]'>
          <div className="w-full max-w-md mx-auto my-4">
            <Skeleton variant="text" width={'50%'} height={15} />
            <Skeleton variant="text" width={'50%'} height={15} />
            <Skeleton variant="text" width={'50%'} height={15} />
            <Skeleton variant="text" width={'50%'} height={15} />
            <br /><Skeleton variant="rectangular" width="100%" height={200} />
          </div>
          <br />
        </div>
      {/* </div> */}
    </Box>
  );
};

export default SystemInfoLoading;

import React from "react";

//components
import ErrorViewer from "@/components/common/ErrorViewer";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorDetails: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorDetails: error.message };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorDetails: error.message });
  }
  refreshPage = () => {
    window.location.reload(false); 
  };
  reportBug = () => {
    const emailBody = encodeURIComponent(`Page URL: ${window.location.href}\nError Text: ${this.state.errorDetails || ""}`);
    const mailto = `mailto:your-email@example.com?subject=Bug Report&body=${emailBody}`;
    window.location.href = mailto;
  }
  goBack = () => {
    window.history.back();
  };
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center w-full h-screen">
          <button
            onClick={this.goBack}
            className="flex justify-center items-center fixed top-5 left-5 p-2 border-[1px] border-gray_800 rounded-[10px] cursor-pointer"
          >
            <ArrowBackIosNewIcon className="text-gray_800 text-sm"/>
          </button>
          <div className="flex flex-col items-center justify-center gap-5 w-full">
            <ErrorViewer
              heading={"Error!"}
              errorMessage={"We've run into a problem, Please try again later!"}
            />
            <div className="flex items-center justify-center gap-2 w-full lg:w-1/2 px-10">
              <button 
                onClick={this.refreshPage}
                className="text-xl text-center text-white font-bold w-full py-3 px-5 bg-red-400 rounded-2xl">
                <bdi>Try again</bdi>
              </button>
              <button 
                onClick={this.reportBug}
                className="text-xl text-center text-white font-bold w-full py-3 px-5 bg-red-600 rounded-2xl"
              >
                <bdi>Report</bdi>
              </button>
            </div>
          </div>
        </div>
      )
    } 
    return this.props.children
  }
}
 
export default ErrorBoundary;
const ContentFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="max-w-7xl mx-auto py-12 flex flex-col md:flex-row justify-center items-center content-center gap-4">
        <p>Traderbook.co - All Rights Reserved</p>
        <p className="hidden md:block">&bull;</p>
        <p>&copy; {year} traderbook.co</p>
      </div>
    </footer>
  );
};
export default ContentFooter;

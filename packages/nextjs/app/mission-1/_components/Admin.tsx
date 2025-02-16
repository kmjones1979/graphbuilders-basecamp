import React from "react";
import javaScriptSourceCode from "./JavaScriptSourceCode";
import { AdminPanel } from "~~/components/admin/AdminPanel";

const Admin: React.FC = () => {
  return (
    <div className="flex justify-center">
      <AdminPanel mission={1} sourceCode={javaScriptSourceCode} />
    </div>
  );
};

export default Admin;

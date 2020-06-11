import React, { Component } from 'react';
import BasicNotFound from './components/BasicRefuseAccess';

export default function() {
  return (
    <div className="NotFound-page">
      {/* 404 报错提示 */}
      <BasicNotFound />
    </div>
  );
}

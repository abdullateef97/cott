import React, { Component } from 'react';
import './App.css'

export default function({children}){
  return (
    <div className="form-group">
      {children}
    </div>
  )
}

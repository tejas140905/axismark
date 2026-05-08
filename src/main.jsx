import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
          <div className="max-w-2xl rounded-[2rem] border border-red-400/20 bg-red-500/10 p-8 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.32em] text-red-200">Runtime Error</p>
            <h1 className="mt-4 font-display text-3xl">The preview hit a startup issue.</h1>
            <pre className="mt-6 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-red-100">
              {String(this.state.error?.message || this.state.error)}
            </pre>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>,
)

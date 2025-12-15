import { useCallback } from 'react'
import ReactFlow, {
  Node,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  MiniMap,
  NodeTypes,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import CustomNode from '../components/CustomNode'

const nodeTypes: NodeTypes = {
  custom: CustomNode,
}

let nodeId = 0

const getId = () => `node_${nodeId++}`

export default function WorkflowCanvas() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = useCallback(
    (params: Connection) => {
      setEdges((eds) => addEdge(params, eds))
    },
    [setEdges]
  )

  const addNode = useCallback(() => {
    const newNode: Node = {
      id: getId(),
      type: 'custom',
      position: {
        x: Math.random() * 400 + 100,
        y: Math.random() * 400 + 100,
      },
      data: {
        label: `Node ${nodeId}`,
      },
    }
    setNodes((nds) => [...nds, newNode])
  }, [setNodes])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold text-gray-800">Demanual AI</h1>
          <span className="text-gray-500">Workflow Builder</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            Welcome, {user?.displayName || user?.email}
          </span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center gap-4">
        <button
          onClick={addNode}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Node
        </button>
        <div className="text-sm text-gray-500">
          {nodes.length} node{nodes.length !== 1 ? 's' : ''} • {edges.length}{' '}
          connection{edges.length !== 1 ? 's' : ''}
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 relative">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-gray-50"
        >
          <Background color="#e5e7eb" gap={16} />
          <Controls />
          <MiniMap
            nodeColor={() => '#6366f1'}
            maskColor="rgba(0, 0, 0, 0.1)"
          />
        </ReactFlow>
      </div>
    </div>
  )
}


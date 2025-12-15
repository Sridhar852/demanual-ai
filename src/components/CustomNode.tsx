import { Handle, Position, NodeProps } from 'reactflow'

interface CustomNodeData {
  label: string
}

export default function CustomNode({ data }: NodeProps<CustomNodeData>) {
  return (
    <div className="px-4 py-3 shadow-md rounded-md bg-white border border-gray-300 min-w-[180px] hover:shadow-lg transition-shadow">
      <Handle
        type="target"
        position={Position.Left}
        className="w-4 h-4 bg-indigo-600 border-2 border-white shadow-md"
        style={{ borderRadius: '50%', top: '50%', transform: 'translateY(-50%)' }}
      />
      <div className="text-center">
        <div className="text-sm font-semibold text-gray-800">{data.label}</div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-4 h-4 bg-indigo-600 border-2 border-white shadow-md"
        style={{ borderRadius: '50%', top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
  )
}


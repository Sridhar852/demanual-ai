import { Handle, Position, NodeProps } from 'reactflow'

interface CustomNodeData {
  label: string
}

export default function CustomNode({ data }: NodeProps<CustomNodeData>) {
  return (
    <div className="px-4 py-3 shadow-lg rounded-lg bg-white border-2 border-gray-200 min-w-[150px]">
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-indigo-500 border-2 border-white"
        style={{ borderRadius: '50%' }}
      />
      <div className="text-center">
        <div className="text-sm font-semibold text-gray-800">{data.label}</div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-indigo-500 border-2 border-white"
        style={{ borderRadius: '50%' }}
      />
    </div>
  )
}


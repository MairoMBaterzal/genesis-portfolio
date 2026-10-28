import React, { useState, useEffect } from 'react';
import {
  Workflow,
  Play,
  RotateCcw,
  Sparkles,
  Code2,
  Database,
  Webhook,
  Server,
  GitBranch,
  Bell,
  Clock,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  Layers,
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';
import { workflowsData, WorkflowBlueprint, WorkflowNode } from '../data/workflowsData';
import confetti from 'canvas-confetti';

interface InteractiveWorkflowCanvasProps {
  onNavigateToHowIWork: () => void;
}

export const InteractiveWorkflowCanvas: React.FC<InteractiveWorkflowCanvasProps> = ({
  onNavigateToHowIWork,
}) => {
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>(workflowsData[0].id);
  const [selectedNode, setSelectedNode] = useState<WorkflowNode>(workflowsData[0].nodes[0]);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(-1);
  const [simulationLogs, setSimulationLogs] = useState<{ text: string; level: string; time: string }[]>([]);
  const [copiedPayload, setCopiedPayload] = useState<string | null>(null);

  const activeWorkflow: WorkflowBlueprint =
    workflowsData.find(w => w.id === selectedWorkflowId) || workflowsData[0];

  // Reset selected node when switching workflows
  useEffect(() => {
    setSelectedNode(activeWorkflow.nodes[0]);
    setIsSimulating(false);
    setActiveStepIndex(-1);
    setSimulationLogs([]);
  }, [selectedWorkflowId]);

  // Live Simulation Runner
  const handleRunSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStepIndex(0);
    setSimulationLogs([
      {
        text: `🚀 [INITIATE] Executing Blueprint: "${activeWorkflow.title}"`,
        level: 'info',
        time: new Date().toLocaleTimeString(),
      },
    ]);

    const totalSteps = activeWorkflow.nodes.length;

    activeWorkflow.nodes.forEach((node, index) => {
      setTimeout(() => {
        setActiveStepIndex(index);
        setSelectedNode(node);

        const currentLog = activeWorkflow.simulationLogs[index] || {
          logText: `Executed node "${node.name}" in ${node.executionStats.latencyMs}ms`,
          level: 'success',
        };

        setSimulationLogs(prev => [
          ...prev,
          {
            text: `[${node.name}] ${currentLog.logText}`,
            level: currentLog.level,
            time: new Date().toLocaleTimeString(),
          },
        ]);

        // When last node finishes
        if (index === totalSteps - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setSimulationLogs(prev => [
              ...prev,
              {
                text: `✅ [COMPLETE] Pipeline finished with 0 errors. Business Impact: ${activeWorkflow.businessImpact}`,
                level: 'success',
                time: new Date().toLocaleTimeString(),
              },
            ]);
            try {
              confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.8 },
              });
            } catch (e) {}
          }, 600);
        }
      }, (index + 1) * 750);
    });
  };

  const handleCopyText = (content: string, key: string) => {
    navigator.clipboard.writeText(content);
    setCopiedPayload(key);
    setTimeout(() => setCopiedPayload(null), 2000);
  };

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Webhook': return Webhook;
      case 'Code': return Code2;
      case 'Sparkles': return Sparkles;
      case 'GitBranch': return GitBranch;
      case 'Database': return Database;
      case 'Bell': return Bell;
      case 'Clock': return Clock;
      case 'Server': return Server;
      default: return Layers;
    }
  };

  return (
    <div className="space-y-8 pb-16 animate-in fade-in duration-300">
      
      {/* 1. Header & Blueprint Selector */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-1">
              <Workflow className="w-4 h-4" />
              <span>Section 03 • Interactive Workflows & Actual Outputs</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Production Workflow Studio & Live Simulator
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click any node to inspect real schemas, JSON inputs/outputs, and custom JS/Python scripts.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRunSimulation}
              disabled={isSimulating}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition shadow-lg cursor-pointer ${
                isSimulating
                  ? 'bg-emerald-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white shadow-emerald-950/60'
              }`}
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isSimulating ? 'Simulating Execution...' : 'Run Live Simulation'}</span>
            </button>
          </div>
        </div>

        {/* Blueprint Switcher Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {workflowsData.map((wf) => {
            const isSelected = wf.id === selectedWorkflowId;
            return (
              <button
                key={wf.id}
                onClick={() => setSelectedWorkflowId(wf.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/70 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-500/50'
                    : 'bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {wf.nodes.length} Nodes
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400">Production</span>
                </div>
                <h3 className={`text-xs sm:text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {wf.title}
                </h3>
                <p className="text-[11px] text-slate-400 truncate mt-0.5">
                  {wf.category}
                </p>
              </button>
            );
          })}
        </div>

        {/* Impact Bar */}
        <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <span className="text-slate-400">Observed Business Impact:</span>
            <span className="font-semibold text-emerald-300">{activeWorkflow.businessImpact}</span>
          </div>
          <span className="hidden sm:inline text-slate-500 font-mono text-[11px]">
            ID: {activeWorkflow.id}
          </span>
        </div>
      </section>

      {/* 2. Visual Node Graph Canvas */}
      <section className="relative rounded-3xl bg-slate-950/90 border border-slate-800 p-6 sm:p-8 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
            <span className="text-xs font-mono font-semibold text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              N8N / Python Pipeline Topology
            </span>
            <span className="text-xs text-slate-500">
              Click node to inspect payloads & code
            </span>
          </div>

          {/* Node Flow Representation */}
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center gap-4 sm:gap-6 min-w-max py-4 px-2">
              {activeWorkflow.nodes.map((node, idx) => {
                const Icon = getNodeIcon(node.icon);
                const isSelected = selectedNode?.id === node.id;
                const isCurrentlyActive = activeStepIndex === idx;

                return (
                  <React.Fragment key={node.id}>
                    {/* Node Card */}
                    <div
                      onClick={() => setSelectedNode(node)}
                      className={`relative group w-48 sm:w-56 p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isSelected
                          ? 'bg-slate-900 border-cyan-400 shadow-xl shadow-cyan-950/60 ring-2 ring-cyan-500/50 scale-105'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                      } ${isCurrentlyActive ? 'ring-4 ring-emerald-400 animate-pulse' : ''}`}
                    >
                      {/* Node Header */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className={`p-2 rounded-xl ${
                          isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Title & Type */}
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {node.name}
                      </h4>
                      <p className="text-[11px] text-cyan-400/90 font-mono truncate mt-0.5">
                        {node.config.runtime}
                      </p>

                      {/* Brief description */}
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-2 leading-relaxed">
                        {node.summary}
                      </p>

                      {/* Bottom Execution Stats */}
                      <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                        <span>{node.executionStats.latencyMs}ms</span>
                        <span className="text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5" /> 200 OK
                        </span>
                      </div>
                    </div>

                    {/* Flow Connector Arrow */}
                    {idx < activeWorkflow.nodes.length - 1 && (
                      <div className="flex flex-col items-center justify-center shrink-0">
                        <div className={`w-8 sm:w-12 h-0.5 transition-all ${
                          activeStepIndex >= idx
                            ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-sm shadow-emerald-400'
                            : 'bg-slate-800'
                        }`} />
                        <span className="text-[9px] font-mono text-slate-500 mt-1 max-w-[60px] truncate text-center">
                          {activeWorkflow.edges[idx]?.label || 'Next'}
                        </span>
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Node Inspector Panel & Real Output Display */}
      {selectedNode && (
        <section className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                  Node Inspector
                </span>
                <span className="text-xs text-slate-400">{selectedNode.config.runtime}</span>
              </div>
              <h2 className="text-xl font-bold text-white tracking-tight mt-1">
                {selectedNode.name}
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {selectedNode.config.description}
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-300 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-500 block text-[10px]">EXECUTION TIME</span>
                <span className="text-emerald-400 font-bold">{selectedNode.executionStats.latencyMs} ms</span>
              </div>
              <div className="w-[1px] h-6 bg-slate-800" />
              <div>
                <span className="text-slate-500 block text-[10px]">MEMORY</span>
                <span className="text-white font-bold">{selectedNode.executionStats.memoryKb} KB</span>
              </div>
              <div className="w-[1px] h-6 bg-slate-800" />
              <div>
                <span className="text-slate-500 block text-[10px]">STATUS</span>
                <span className="text-cyan-400 font-bold uppercase">{selectedNode.executionStats.status}</span>
              </div>
            </div>
          </div>

          {/* If node has a custom script (JS or Python), show it prominently */}
          {selectedNode.customScript && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Genesis's Custom Production Code Node</span>
                </span>
                <button
                  onClick={() => handleCopyText(selectedNode.customScript!, 'script')}
                  className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition cursor-pointer"
                >
                  {copiedPayload === 'script' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPayload === 'script' ? 'Copied' : 'Copy Script'}</span>
                </button>
              </div>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-200 overflow-x-auto max-h-60">
                <pre><code>{selectedNode.customScript}</code></pre>
              </div>
            </div>
          )}

          {/* Side by side: Input Payload vs Output Payload */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            
            {/* Input Payload */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>Incoming Payload (JSON Input)</span>
                </span>
                <button
                  onClick={() => handleCopyText(JSON.stringify(selectedNode.inputPayload, null, 2), 'input')}
                  className="text-[11px] text-slate-500 hover:text-white transition flex items-center gap-1 cursor-pointer"
                >
                  {copiedPayload === 'input' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPayload === 'input' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-3 rounded-xl bg-slate-900 border border-slate-800/80 font-mono text-xs text-slate-300 overflow-x-auto max-h-64 leading-relaxed">
                <code>{JSON.stringify(selectedNode.inputPayload, null, 2)}</code>
              </pre>
            </div>

            {/* Output Payload */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Normalized Output (JSON Handshake)</span>
                </span>
                <button
                  onClick={() => handleCopyText(JSON.stringify(selectedNode.outputPayload, null, 2), 'output')}
                  className="text-[11px] text-slate-500 hover:text-white transition flex items-center gap-1 cursor-pointer"
                >
                  {copiedPayload === 'output' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedPayload === 'output' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-3 rounded-xl bg-slate-900 border border-emerald-900/40 font-mono text-xs text-emerald-300 overflow-x-auto max-h-64 leading-relaxed">
                <code>{JSON.stringify(selectedNode.outputPayload, null, 2)}</code>
              </pre>
            </div>

          </div>

        </section>
      )}

      {/* 4. Live Simulation Logs Console */}
      {simulationLogs.length > 0 && (
        <section className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-2 font-mono text-xs animate-in fade-in">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800/60 pb-2">
            <span className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Execution Log Stream</span>
            </span>
            <span className="text-[10px] text-slate-500">Live Telemetry</span>
          </div>
          <div className="space-y-1.5 max-h-48 overflow-y-auto">
            {simulationLogs.map((log, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-slate-500 text-[10px]">{log.time}</span>
                <span className={`${
                  log.level === 'warn' ? 'text-amber-400' : log.level === 'success' ? 'text-emerald-400' : 'text-slate-300'
                }`}>
                  {log.text}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Next Step Navigation */}
      <div className="flex items-center justify-between pt-4">
        <span className="text-xs text-slate-400">Ready to discuss delivery methodology?</span>
        <button
          onClick={onNavigateToHowIWork}
          className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition cursor-pointer"
        >
          <span>Continue to Page 04: How I Work & SOPs</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

